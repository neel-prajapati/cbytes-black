import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    name: 'Chai Sutta Club Adelaide',
    location: 'Adelaide',
    category: 'Indian Café',
    description: 'Bringing the warmth of Indian chai culture to Adelaide, Chai Sutta Club is a community-driven café known for its signature kulhad chai, street-style snacks, and a vibrant atmosphere that turns every visit into a memorable experience.',
    image: '/chai-sutta-club.jpeg',
  },
  {
    id: 2,
    name: 'Tikka N Talk',
    location: 'Glenelg',
    category: 'Indian Dining',
    description: 'A modern Indian dining destination in Glenelg that blends authentic flavours with contemporary elegance, offering thoughtfully crafted dishes, premium hospitality, and a refined culinary experience by the coast.',
        image: '/tikka-n-talk.JPG',

  },
  {
    id: 3,
    name: 'Hispanic Mechanic',
    location: 'Adelaide',
    category: 'Latin American',
    description: 'A bold Latin American restaurant serving authentic Mexican-inspired cuisine, handcrafted cocktails, and vibrant flavours in an energetic setting that celebrates the rich food culture of Latin America.',
        image: '/hispanic.jpeg',

  },
  {
    id: 4,
    name: 'Mexican Society',
    location: 'Gouger Street',
    category: 'Mexican Dining',
    description: 'One of Adelaide\'s favourite Mexican dining destinations, delivering colourful dishes, premium margaritas, and a lively social atmosphere inspired by the heart and soul of Mexico.',
        image: '/mexican-society.JPG',

  },
  {
    id: 5,
    name: 'Mr Chaiwala',
    location: 'Port Road',
    category: 'Indian Street Food',
    description: 'An authentic Indian street food and chai destination bringing the flavours of India\'s bustling streets to Adelaide through traditional chai, freshly prepared snacks, and a welcoming neighbourhood atmosphere.',
        image: '/mr-chaiwala.jpg',

  },
  {
    id: 6,
    name: 'The Baithak',
    location: 'Collinswood',
    category: 'Indian Restaurant',
    description: 'A contemporary Indian restaurant where traditional recipes, warm hospitality, and elegant dining come together to create an experience that feels both authentic and inviting.',
        image: '/baithak.JPG',

  },
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
              className="w-full rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden cursor-pointer group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-text-muted/50 text-xs sm:text-sm md:text-base font-medium">{project.category}</p>
                  <p className="text-text-muted/40 text-xs sm:text-sm">{project.location}</p>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-text-muted mb-3">{project.name}</h3>
                <p className="text-text-muted/60 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-text-muted/60 text-xs sm:text-sm md:text-base mt-4 pt-3 border-t border-white/10"
                >
                  Explore →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



