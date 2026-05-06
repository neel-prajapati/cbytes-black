import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeUpVariants } from '../../utils/animations';
import { PROJECTS } from '../../utils/constants';

export const Work = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} id="work" className="relative w-full bg-black py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-500/20 to-transparent blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2
            variants={fadeUpVariants}
            custom={0}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Featured Work
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            custom={1}
            className="text-text-muted/60 text-lg max-w-2xl"
          >
            A selection of projects that showcase our expertise and creativity
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              custom={index + 2}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Base background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30"
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Grid pattern overlay */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.05) 25%, rgba(168, 85, 247, 0.05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.05) 25%, rgba(168, 85, 247, 0.05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.05) 75%, rgba(168, 85, 247, 0.05) 76%, transparent 77%, transparent)',
                  backgroundSize: '50px 50px',
                }}
              />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border border-white/10 group-hover:border-purple-500/30 rounded-xl transition-colors duration-300"
              />

              {/* Animated zoom overlay */}
              <motion.div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20"
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top */}
                <div className="space-y-2">
                  <p className="text-purple-400/70 text-xs font-semibold uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>

                {/* Bottom */}
                <motion.div
                  animate={{
                    y: hoveredId === project.id ? -8 : 0,
                    opacity: hoveredId === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                  <motion.div
                    animate={{
                      x: hoveredId === project.id ? 8 : 0,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 text-sm font-semibold"
                  >
                    View Project →
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex justify-center mt-20"
        >
          <motion.button
            variants={fadeUpVariants}
            custom={PROJECTS.length + 2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};



