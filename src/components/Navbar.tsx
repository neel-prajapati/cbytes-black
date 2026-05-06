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
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-text-muted tracking-tight stylish-font"
          whileHover={{ opacity: 0.8 }}
        >
          Cruising Bytes
        </motion.a>

        {/* Contacts Link */}
        <motion.button
          onClick={scrollToContact}
          className="text-sm font-semibold text-text-muted hover:text-text-muted/70 transition-colors underline"
          whileHover={{ scale: 1.05 }}
        >
          CONTACTS
        </motion.button>
      </div>
    </motion.nav>
  );
};



