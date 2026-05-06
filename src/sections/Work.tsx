import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const PROJECTS = [
  { id: 1, title: 'Project Alpha', category: 'Branding' },
  { id: 2, title: 'Project Beta', category: 'Web Design' },
  { id: 3, title: 'Project Gamma', category: 'Mobile App' },
  { id: 4, title: 'Project Delta', category: 'UX Design' },
  { id: 5, title: 'Project Epsilon', category: 'Graphic Design' },
  { id: 6, title: 'Project Zeta', category: 'Strategy' },
];

export const Work = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const newScrollLeft =
      container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

    setTimeout(() => updateScrollState(), 300);
  };

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <section id="work" className="relative w-full bg-black py-32 md:py-40 lg:py-48">
      <div className=" mx-auto px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mb-20 md:mb-28 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-text-muted mb-6 md:mb-8">
            Best Cases
          </h2>
          <p className="text-text-muted/60 text-lg md:text-xl">Our Projects</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 text-text-muted/60 hover:text-text-muted hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollState}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-96 h-96 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 flex flex-col justify-between cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-text-muted/50 text-sm mb-4">{project.category}</p>
                  <h3 className="text-2xl font-light text-text-muted">{project.title}</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="relative z-10 text-text-muted/60 text-sm"
                >
                  View Project →
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 text-text-muted/60 hover:text-text-muted hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};



