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
        setTimeout(onComplete, 600);
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
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-purple-950/30 to-black overflow-hidden"
        >
          {/* Animated Background Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/40 to-purple-900/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 15, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-tl from-blue-600/30 to-cyan-500/20 blur-3xl"
              animate={{
                scale: [1.2, 0.9, 1.2],
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/4 -right-24 w-56 h-56 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-600/15 blur-3xl"
              animate={{
                scale: [0.9, 1.1, 0.9],
                x: [0, 30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>

          {/* Main Loader Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-12">
            {/* Artistic Animated Rings */}
            <div className="relative w-48 h-48">
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-transparent to-blue-500 bg-clip-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Middle Pulsing Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-cyan-500/40"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Inner Morphing Orb */}
              <motion.div
                className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500/60 to-blue-500/40 blur-xl"
                animate={{
                  scale: [1, 1.1, 0.95, 1],
                  borderRadius: ['50%', '48%', '52%', '50%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Center Glow Dot */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-sm" />
              </motion.div>
            </div>

            {/* Progress Display */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Animated Progress Bar */}
              <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Percentage Text */}
              <motion.div
                className="text-center"
                key={Math.floor(progress)}
              >
                <div className="text-5xl font-light bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {Math.floor(progress)}%
                </div>
                <motion.p
                  className="text-sm text-purple-300/60 mt-2 tracking-widest uppercase"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading Experience
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Animated Decorative Elements */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



