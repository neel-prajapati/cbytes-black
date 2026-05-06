import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 400);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative w-40 h-40">
            {/* Outer circle */}
            <motion.svg
              className="absolute inset-0"
              viewBox="0 0 160 160"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="80" cy="80" r="75" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            </motion.svg>

            {/* Middle circle */}
            <motion.svg
              className="absolute inset-0"
              viewBox="0 0 160 160"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="80" cy="80" r="55" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            </motion.svg>

            {/* Inner circle */}
            <motion.svg
              className="absolute inset-0"
              viewBox="0 0 160 160"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="80" cy="80" r="35" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </motion.svg>

            {/* Center percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-4xl font-light text-text-muted tracking-tight">
                  {Math.floor(progress)}%
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



