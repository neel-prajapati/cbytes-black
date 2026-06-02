import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex items-center justify-between">

        <motion.a
          href="#"
          className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
          whileHover={{ opacity: 0.8 }}
        >
          <img 
            src="/logo.jpeg" 
            alt="Cruising Bytes Logo" 
            className="h-16 w-16 rounded-full object-cover border border-white/20 shadow-lg flex-shrink-0"
            style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}
          />
          <p className="text-xl font-bold text-text-muted tracking-tight stylish-font">
            Cruising Bytes
          </p>
        </motion.a>

        {/* Contacts Link */}
        <motion.button
          onClick={scrollToContact}
          className="text-sm font-semibold text-text-muted hover:text-text-muted/70 transition-colors underline"
          whileHover={{ scale: 1.05 }}
        >
          <p style={{marginRight:'2rem', marginTop:'1rem'}}></p>
        </motion.button>
      </div>
    </motion.nav>
  );
};



