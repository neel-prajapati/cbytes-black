import { motion } from 'framer-motion';

export const CTA = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative w-full bg-black py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
        >
          <br />
          <br />
          <br />
          <br />
          <h2 className="text-5xl font-light text-text-muted mb-16 md:mb-20 lg:mb-24 leading-tight m-8">
            Ready to turn your ideas into reality?
          </h2>

          <div className="space-y-8">
            <h3 className="text-xl font-light text-white mb-6">Contact Us from your preferred platform and we'll take care of the rest!</h3>
            
            <div className="flex justify-center gap-6 md:gap-8" style={{marginTop:'2rem'}}>
              <motion.a
                href="mailto:hi@cruisingbytes.com"
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20 hover:border-white/40"
                title="Email"
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://instagram.com/cruisingbytes"
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20 hover:border-white/40"
                title="Instagram"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.914 4.914 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08a9.884 9.884 0 01-4.118-.06c-1.066-.049-1.793-.218-2.428-.465a4.89 4.89 0 01-1.771-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.636-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </motion.a>
            </div>

            <p className="text-text-muted/60 text-xl mt-8 stylish-font" style={{marginTop:'2rem'}}>
              Cruising Bytes© {currentYear}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



