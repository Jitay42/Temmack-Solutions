import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="border border-white/20"
              />
            ))}
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full backdrop-blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -90, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 right-20 w-16 h-16 bg-accent/40 rounded-lg backdrop-blur-sm"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/25 rounded-full backdrop-blur-sm"
        />

        {/* TMK Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-primary/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-white font-black text-2xl">TMK</span>
        </motion.div>

        {/* Floating Lines */}
        <motion.div
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        <motion.div
          animate={{
            scaleY: [1, 1.8, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 right-0 w-0.5 h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"
        />

        {/* Particle Effects */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${10 + (i * 5)}%`,
              top: `${20 + (i * 3)}%`,
            }}
          />
        ))}

        {/* Animated Captions */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-8 bg-white/10 backdrop-blur-sm rounded-lg p-3"
        >
          <p className="text-white text-sm font-medium">Clarity-First Approach</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-40 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3"
        >
          <p className="text-white text-sm font-medium">Strategic Communication</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
        >
          <p className="text-white text-sm font-medium">Results-Driven Solutions</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block bg-primary/20 text-white px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-primary/30">
                Clarity-First Digital Consultancy
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white"
            >
              Clarity Changes <span className="text-primary">Everything</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 leading-relaxed text-white/95 max-w-3xl mx-auto"
            >
              You're not invisible — you're just unclear. We help brands speak boldly, 
              sell better, and grow with direction.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all duration-500 ease-in-out shadow-2xl backdrop-blur-sm active:bg-accent active:border-accent active:text-white"
              >
                Let's Create Clarity Together
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;