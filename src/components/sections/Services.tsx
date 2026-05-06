import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeUpVariants } from '../../utils/animations';
import { SERVICES } from '../../utils/constants';

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="services"
      className="relative w-full bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            custom={0}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            custom={1}
            className="text-text-muted/60 text-lg max-w-2xl"
          >
            Comprehensive solutions for your digital transformation
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUpVariants}
              custom={index + 2}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -8 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === service.id ? 1 : 0,
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 pointer-events-none"
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-4xl">{service.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                  <motion.div
                    animate={{
                      x: hoveredId === service.id ? 4 : 0,
                      opacity: hoveredId === service.id ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={20} className="text-purple-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



