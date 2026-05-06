import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TextIntro } from './sections/TextIntro';
import { PeepsCrowd } from './sections/PeepsCrowd';
import { Showreel } from './sections/Showreel';
import { Work } from './sections/Work';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-black text-text-muted">
      <AnimatePresence>
        {!isLoaded && <Loader key="loader" onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {isLoaded && (
        <>
          <Navbar />
          <Hero />
          <TextIntro />
          <PeepsCrowd />
          {/* <Showreel /> */}
          <Services />
          <Work />
          <About />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;



