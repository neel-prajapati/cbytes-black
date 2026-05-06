import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-text-muted mb-16 md:mb-20 lg:mb-24 leading-tight">
            We are ready to discuss your project
          </h2>

          <div className="space-y-4">
            <motion.a
              href="mailto:hi@cruisingbytes.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-10 py-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-all"
            >
              Start Your Project
            </motion.a>

            <p className="text-text-muted/60 text-sm mt-8">
              hi@cruisingbytes.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



