import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-28">
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-12 gap-8"
        >
          <p className="text-text-muted/50 text-sm">© {currentYear} Cruising Bytes</p>

          <p className="text-text-muted/50 text-sm">EST. 2016</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ color: '#ffffff' }}
            className="text-text-muted/50 hover:text-text-muted text-sm transition-colors"
          >
            GO TO TOP
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-white/10 mb-12 origin-center"
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-text-muted">CRUISING BYTES</h3>
          </div>

          <motion.a
            href="mailto:hi@cruisingbytes.black"
            whileHover={{ color: '#ffffff' }}
            className="text-text-muted/50 hover:text-text-muted text-sm transition-colors"
          >
            hi@cruisingbytes.black
          </motion.a>

          <p className="text-text-muted/50 text-sm">{currentYear} ©Copyright</p>
        </motion.div>
      </div>
    </footer>
  );
};



