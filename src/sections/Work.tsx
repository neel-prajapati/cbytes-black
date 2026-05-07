import { motion } from 'framer-motion';

const PROJECTS = [
  { id: 1, title: 'Project Alpha', category: 'Branding' },
  { id: 2, title: 'Project Beta', category: 'Web Design' },
  { id: 3, title: 'Project Gamma', category: 'Mobile App' },
  { id: 4, title: 'Project Delta', category: 'UX Design' },
  { id: 5, title: 'Project Epsilon', category: 'Graphic Design' },
  { id: 6, title: 'Project Zeta', category: 'Strategy' },
];

export const Work = () => {
  return (
    <section id="work" className="relative w-full bg-black py-32 md:py-40 lg:py-48">
      <div className=" mx-auto px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mb-20 md:mb-28 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-text-muted mb-6 md:mb-8">
            The Showcase
          </h2>
          {/* <p className="text-text-muted/60 text-lg md:text-xl">Our Projects</p> */}
        </motion.div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10" style={{marginTop:'2rem', padding:'2rem'}}>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="w-full aspect-square rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-4 sm:p-6 md:p-8 flex flex-col justify-between cursor-pointer group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-text-muted/50 text-xs sm:text-sm md:text-base mb-2 sm:mb-4">{project.category}</p>
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-text-muted">{project.title}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="relative z-10 text-text-muted/60 text-xs sm:text-sm md:text-base"
              >
                View Project →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



