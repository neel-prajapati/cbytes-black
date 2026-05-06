import { motion } from 'framer-motion';

export const TextIntro = () => {
  const text = "In a world full of noise, movement, and constant competition, we help brands find clarity. From strategy to design, we create digital experiences that stand out, connect with people, and drive real growth.";

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-black overflow-hidden">
      {/* Gradient Background Elements */}
      
          {/* Decorative Elements Below Text */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
            className="mt-12 md:mt-16 h-1 w-full mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
            style={{margin:'2rem'}}
          />
      <div className="absolute inset-0 overflow-hidden">
        
        <motion.div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-blue-500/15 to-transparent blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="w-full text-center flex flex-col items-center justify-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed font-light text-white/90">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>

        </motion.div>
      </div>
    </section>
  );
};
