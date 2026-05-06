import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const words = [
    'Crafting',
    'Digital',
    'Experiences',
    'That',
    'Inspire'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple Orb - Top Left */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/60 to-purple-900/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Blue Orb - Bottom Right */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-blue-600/50 to-cyan-500/30 blur-3xl"
          animate={{
            scale: [1.2, 0.9, 1.2],
            x: [0, -40, 0],
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Pink Orb - Center */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-pink-500/40 to-purple-600/30 blur-3xl"
          animate={{
            scale: [0.9, 1.2, 0.9],
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,197,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,197,197,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Rotating Accent Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-10 w-full flex flex-col items-center justify-center h-full">
        {/* Main Heading with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mb-12 md:mb-16 lg:mb-20 text-center w-full"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.1] md:leading-[1.1] lg:leading-[1.1] text-white bg-clip-text bg-gradient-to-r from-white via-white to-text-muted/80 use-inter-fonts">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Stats Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm hover:border-purple-500/60 cursor-pointer transition-all duration-300"
          >
            <p className="text-xs md:text-sm text-white font-semibold">✨ 20+ Design Awards</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm hover:border-cyan-500/60 cursor-pointer transition-all duration-300"
          >
            <p className="text-xs md:text-sm text-white font-semibold">🚀 10+ Years Experience</p>
          </motion.div>
        </motion.div> */}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center " style={{marginTop:'2rem'}}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 md:px-10 py-4 md:py-5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-sm md:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            
            <p style={{paddingLeft:'1rem',paddingRight:'1rem', paddingTop:'1px', paddingBottom:'2px'}}>Build. Scale. Convert.</p>

          </motion.button>

          {/* <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 md:py-5 rounded-lg border border-purple-500/50 text-white bg-gradient-to-r from-transparent to-transparent hover:from-purple-500/10 hover:to-blue-500/10 font-semibold text-sm md:text-base transition-all duration-300"
          >
            Explore Our Work
          </motion.button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-8 h-12 border-2 border-purple-500/40 rounded-full flex items-center justify-center cursor-pointer hover:border-purple-500/80 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-purple-500/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};



