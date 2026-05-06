import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeUpVariants, containerVariants } from '../../utils/animations';

export const Hero = () => {
  const headingLines = [
    'Interfaces and digital',
    'brands that accelerate',
    'revenue',
  ];

  const stats = [
    { label: '20+', value: 'Design Awards' },
    { label: '10+', value: 'Years of Experience' },
  ];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden pt-32 pb-20">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 -left-40 w-80 h-80 border border-indigo-500/20 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            {headingLines.map((line, i) => (
              <motion.h1
                key={i}
                custom={i}
                variants={fadeUpVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeUpVariants}
            custom={3}
            className="flex flex-col md:flex-row gap-8 pt-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-lg font-semibold text-purple-400">{stat.label}</p>
                <p className="text-text-muted/70 text-sm">{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            custom={4}
            className="flex flex-col md:flex-row gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300"
            >
              <Play size={20} className="fill-current" />
              Watch Showreelsdfsd
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted/50 cursor-pointer hover:text-text-muted/80 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};



