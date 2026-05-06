import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Showreel = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-40 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="flex flex-col items-center gap-10 md:gap-12"
        >
          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white/40 hover:border-white/80 flex items-center justify-center transition-colors group"
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ scale: [1.2, 1.5, 1.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
            />
            <Play className="w-16 md:w-20 h-16 md:h-20 text-text-muted fill-text-muted relative z-10" />
          </motion.button>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-light text-text-muted mb-3 md:mb-4">
              Watch Showreel
            </h3>
            <p className="text-text-muted/50 text-base md:text-lg">00:36</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



