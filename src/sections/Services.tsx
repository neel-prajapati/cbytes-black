import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    title: 'Digital Marketing & Branding',
    gradient: 'from-orange-600 to-red-600',
    description: 'Creative visual solutions',
    image: '/digital-marketing.jpg' // Replace with actual image URL
  },
  {
    id: 2,
    title: 'SEO & Content Strategy',
    gradient: 'from-gray-500 to-gray-600',
    description: 'Strategic visual storytelling',
    image: '/seo.jpg' // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Web Development',
    gradient: 'from-purple-600 to-blue-600',
    description: 'Digital marketing excellence',
    image: '/website.jpg' // Replace with actual image URL
  }
];

export const Services = () => {
  return (
    <section id="services" className="w-full bg-black py-32 md:py-40 lg:py-48" style={{marginTop:'2rem',marginBottom:'2rem', padding:'2rem'}}>
      <div className=" mx-auto px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-text-muted">
              What we do
            </h2>
          </div>
        </motion.div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10" style={{marginTop:'2rem'}}>
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`w-full aspect-square rounded-2xl  p-6 sm:p-8 md:p-10 lg:p-12 cursor-pointer group overflow-hidden shadow-2xl relative`}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay - darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />
              
              {/* Title positioned artistically at bottom */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 flex flex-col justify-end h-full items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400 group-hover:text-gray-100 transition-colors duration-300 tracking-wide leading-tight text-center">
                  {service.title}
                </h3>
                {/* Subtle accent line */}
                <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-gray-500 to-transparent mt-2 sm:mt-3 md:mt-4 group-hover:w-16 sm:group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mt-20 text-center mx-auto"
        >
          <p className="text-xl md:text-2xl font-light text-text-muted/80 leading-relaxed">
            We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
