import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeUpVariants, containerVariants } from '../../utils/animations';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    { title: 'Expert Team', desc: 'Small group of dedicated professionals' },
    { title: 'Years of Experience', desc: 'Since 2022, delivering excellence' },
    { title: 'Global Clients', desc: 'Trusted by brands worldwide' },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={fadeUpVariants} custom={0} className="space-y-4">
              <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
                About Us
              </p>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Strong & Unique Digital and Graphic Experience
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-text-muted/70 text-lg leading-relaxed max-w-xl"
            >
              We are a small group of experts in design, branding, and digital strategy. Since our founding in 2022, we've been dedicated to creating premium digital experiences that drive real results for our clients.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              custom={2}
              className="text-text-muted/50 text-base leading-relaxed max-w-xl"
            >
              Every project is an opportunity to push boundaries and deliver work that exceeds expectations. We combine strategic thinking with exceptional design to transform ideas into impactful digital brands.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={fadeUpVariants}
              custom={3}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
            >
              {features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-semibold text-text-muted">{feature.title}</h4>
                  <p className="text-text-muted/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUpVariants} custom={4} className="pt-8">
              <motion.a
                href="mailto:hi@cruisingbytes.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUpVariants}
              custom={0}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10"
            >
              {/* Animated grid background */}
              <motion.div
                animate={{ backgroundPosition: ['0 0', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, transparent 48%, rgba(168, 85, 247, 0.1) 49%, rgba(168, 85, 247, 0.1) 51%, transparent 52%)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 border-2 border-purple-500/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '2022', label: 'Founded' },
                { number: '50+', label: 'Projects' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  custom={i + 1}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <p className="text-2xl font-bold text-purple-400">{stat.number}</p>
                  <p className="text-text-muted/60 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



