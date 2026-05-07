import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-32 md:py-40 lg:py-48">
      <div className=" mx-auto px-6 md:px-8 lg:px-10">
        <div className="space-y-12 md:space-y-16 text-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-text-muted mb-8 md:mb-10">
              Strong & Unique Digital and Graphic Experience
            </h2>

            <p className="text-text-muted/60 text-lg mb-6" style={{marginTop:'2rem'}}>
              Creating impactful brands and websites since 2022 AD.
            </p>

            <p className="text-text-muted/70 leading-relaxed mb-8">
              We specialize in design, branding, and strategy, creating digital solutions that connect vision with measurable results. Our approach blends creative excellence with strategic thinking to deliver brands that truly resonate.
            </p>

          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20"
            style={{marginTop:'2rem'}}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <p className="text-text-muted/60 text-sm font-medium tracking-wider mb-3 uppercase">Founded</p>
                <p className="text-5xl md:text-6xl font-light text-white">2022</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <p className="text-text-muted/60 text-sm font-medium tracking-wider mb-3 uppercase">Projects Completed</p>
                <p className="text-5xl md:text-6xl font-light text-white">30<span className="text-text-muted/80">+</span></p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <p className="text-text-muted/60 text-sm font-medium tracking-wider mb-3 uppercase">Team Members</p>
                <p className="text-5xl md:text-6xl font-light text-white">10<span className="text-text-muted/80">+</span></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



