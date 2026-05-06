import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeUpVariants } from '../../utils/animations';

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      className="relative w-full bg-black py-32 px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10"
        />

        {/* Animated circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-indigo-500/10 rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center space-y-12"
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} custom={0} className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              Ready to transform your digital presence?
            </h2>
            <p className="text-text-muted/60 text-xl max-w-2xl mx-auto">
              Let's work together to create something extraordinary
            </p>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            variants={fadeUpVariants}
            custom={1}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="mailto:hi@cruisingbytes.com"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-bold text-lg transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 -z-10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Call
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUpVariants}
            custom={2}
            className="pt-12 border-t border-white/10"
          >
            <div className="space-y-4">
              <p className="text-text-muted/70">Get in touch with us directly</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="mailto:hi@cruisingbytes.com"
                  whileHover={{ color: '#a855f7' }}
                  className="text-text-muted text-lg font-semibold transition-colors"
                >
                  hi@cruisingbytes.com
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ color: '#a855f7' }}
                  className="text-text-muted text-lg font-semibold transition-colors"
                >
                  +1 (234) 567-890
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



