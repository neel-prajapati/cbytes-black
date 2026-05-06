import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-32 md:py-40 lg:py-48">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10">
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

            <p className="text-text-muted/60 text-lg mb-6">
              Making high-quality projects since —2016
            </p>

            <p className="text-text-muted/70 leading-relaxed mb-8">
              We specialize in design, branding, and strategy, creating digital solutions that connect vision with measurable results. Our approach blends creative excellence with strategic thinking to deliver brands that truly resonate.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 rounded-lg border border-white/30 text-text-muted hover:border-white/60 transition-all"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 flex flex-col items-center"
          >
            <div className="p-8 rounded-lg bg-white/5 border border-white/10 w-full max-w-xs">
              <p className="text-text-muted/50 text-sm mb-2">Founded</p>
              <p className="text-4xl font-light text-text-muted">2016</p>
            </div>

            <div className="p-8 rounded-lg bg-white/5 border border-white/10 w-full max-w-xs">
              <p className="text-text-muted/50 text-sm mb-2">Projects Completed</p>
              <p className="text-4xl font-light text-text-muted">50+</p>
            </div>

            <div className="p-8 rounded-lg bg-white/5 border border-white/10 w-full max-w-xs">
              <p className="text-text-muted/50 text-sm mb-2">Team Members</p>
              <p className="text-4xl font-light text-text-muted">20+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



