import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    title: 'Digital Marketing & Branding',
    gradient: 'from-orange-600 to-red-600',
    description: 'Creative visual solutions'
  },
  {
    id: 2,
    title: 'SEO & Content Strategy',
    gradient: 'from-gray-500 to-gray-600',
    description: 'Strategic visual storytelling'
  },
  {
    id: 3,
    title: 'Web Development',
    gradient: 'from-purple-600 to-blue-600',
    description: 'Digital marketing excellence'
  }
];

export const Services = () => {
  return (
    <section id="services" className="w-full bg-black py-32 md:py-40 lg:py-48" style={{marginTop:'2rem',marginBottom:'2rem', padding:'2rem'}}>
      <div className=" mx-auto px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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

        {/* Carousel Container */}
        <div className="" style={{marginTop:'2rem'}}>
          {/* Scroll Container */}
          <div
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 px-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className={`flex-shrink-0 w-96 h-96 rounded-2xl bg-gradient-to-br ${service.gradient} p-12 flex flex-col justify-between cursor-pointer group overflow-hidden relative shadow-2xl`}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative z-10 p-4">
                  <h3 className="text-4xl font-light text-white mb-4">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-light text-text-muted/80 leading-relaxed">
            We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
