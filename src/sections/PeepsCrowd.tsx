import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const config = {
  src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png',
  rows: 15,
  cols: 7
};

const randomRange = (min: number, max: number) => min + Math.random() * (max - min);

const randomIndex = (array: any[]) => (randomRange(0, array.length) | 0);

const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];

const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));

const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));

const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

interface ResetPeepResult {
  startX: number;
  startY: number;
  endX: number;
}

interface PeepProps {
  image: HTMLImageElement;
  rect: number[];
}

interface ResetPeepInput {
  stage: { width: number; height: number };
  peep: Peep;
}

const resetPeep = ({ stage, peep }: ResetPeepInput): ResetPeepResult => {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random());
  const startY = stage.height - peep.height + offsetY;
  let startX;
  let endX;

  if (direction === 1) {
    startX = -peep.width;
    endX = stage.width;
    peep.scaleX = 1;
  } else {
    startX = stage.width + peep.width;
    endX = 0;
    peep.scaleX = -1;
  }

  peep.x = startX;
  peep.y = startY;
  peep.anchorY = startY;

  return {
    startX,
    startY,
    endX
  };
};

interface NormalWalkInput {
  peep: Peep;
  props: ResetPeepResult;
}

const normalWalk = ({ peep, props }: NormalWalkInput) => {
  const { startX, startY, endX } = props;

  const xDuration = 10;
  const yDuration = 0.25;

  const tl = gsap.timeline();
  tl.timeScale(randomRange(0.5, 1.5));
  tl.to(peep, {
    duration: xDuration,
    x: endX,
    ease: 'none'
  }, 0);
  tl.to(peep, {
    duration: yDuration,
    repeat: xDuration / yDuration,
    yoyo: true,
    y: startY - 10
  }, 0);

  return tl;
};

const walks = [normalWalk];

class Peep {
  image: HTMLImageElement;
  rect: number[];
  width: number;
  height: number;
  drawArgs: any[];
  x: number;
  y: number;
  anchorY: number;
  scaleX: number;
  walk: gsap.core.Timeline | null;

  constructor({ image, rect }: PeepProps) {
    this.image = image;
    this.setRect(rect);
    this.x = 0;
    this.y = 0;
    this.anchorY = 0;
    this.scaleX = 1;
    this.walk = null;
  }

  setRect(rect: number[]) {
    this.rect = rect;
    this.width = rect[2];
    this.height = rect[3];

    this.drawArgs = [
      this.image,
      ...rect,
      0,
      0,
      this.width,
      this.height
    ];
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, 1);
    ctx.drawImage(...this.drawArgs);
    ctx.restore();
  }
}

export const PeepsCrowd = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const stageRef = useRef({ width: 0, height: 0 });
  const allPeepsRef = useRef<Peep[]>([]);
  const availablePeepsRef = useRef<Peep[]>([]);
  const crowdRef = useRef<Peep[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const img = new Image();
    imgRef.current = img;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctxRef.current = canvas.getContext('2d');

      createPeeps();
      resize();

      gsap.ticker.add(render);
      window.addEventListener('resize', resize);

      return () => {
        gsap.ticker.remove(render);
        window.removeEventListener('resize', resize);
      };
    };

    img.src = config.src;
  }, []);

  const createPeeps = () => {
    const { rows, cols } = config;
    const img = imgRef.current;
    if (!img) return;

    const { naturalWidth: width, naturalHeight: height } = img;
    const total = rows * cols;
    const rectWidth = width / rows;
    const rectHeight = height / cols;

    for (let i = 0; i < total; i++) {
      allPeepsRef.current.push(
        new Peep({
          image: img,
          rect: [
            ((i % rows) * rectWidth),
            ((i / rows | 0) * rectHeight),
            rectWidth,
            rectHeight
          ]
        })
      );
    }
  };

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    stageRef.current.width = canvas.clientWidth;
    stageRef.current.height = canvas.clientHeight;
    canvas.width = stageRef.current.width * devicePixelRatio;
    canvas.height = stageRef.current.height * devicePixelRatio;

    crowdRef.current.forEach((peep) => {
      if (peep.walk) {
        peep.walk.kill();
      }
    });

    crowdRef.current.length = 0;
    availablePeepsRef.current.length = 0;
    availablePeepsRef.current.push(...allPeepsRef.current);

    initCrowd();
  };

  const initCrowd = () => {
    while (availablePeepsRef.current.length) {
      const peep = addPeepToCrowd();
      if (peep && peep.walk) {
        peep.walk.progress(Math.random());
      }
    }
  };

  const addPeepToCrowd = (): Peep | undefined => {
    const peep = removeRandomFromArray(availablePeepsRef.current);
    if (!peep) return;

    const walk = getRandomFromArray(walks)({
      peep,
      props: resetPeep({
        peep,
        stage: stageRef.current
      })
    }).eventCallback('onComplete', () => {
      removePeepFromCrowd(peep);
      addPeepToCrowd();
    });

    peep.walk = walk;

    crowdRef.current.push(peep);
    crowdRef.current.sort((a, b) => a.anchorY - b.anchorY);

    return peep;
  };

  const removePeepFromCrowd = (peep: Peep) => {
    removeItemFromArray(crowdRef.current, peep);
    availablePeepsRef.current.push(peep);
  };

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    canvas.width = canvas.width;
    ctx.save();
    ctx.scale(devicePixelRatio, devicePixelRatio);

    crowdRef.current.forEach((peep) => {
      peep.render(ctx);
    });

    ctx.restore();
  };

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        id="canvas"
        className="w-full block h-80 sm:h-96 md:h-[450px] lg:h-[500px]"
      />
    </section>
  );
};
