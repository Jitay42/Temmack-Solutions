import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RealisticModelBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const businessImages = [
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Professional business team collaboration'
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Strategic planning and communication'
    },
    {
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Digital marketing and technology'
    },
    {
      url: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Creative content strategy session'
    },
    {
      url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Professional copywriting and design'
    }
  ];

  // Auto-switch images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % businessImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [businessImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
      {/* Background Image Switcher */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={businessImages[currentImageIndex].url}
              alt={businessImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Temmack Logo */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
        >
          <img 
            src="/logo/Tmk logo.png" 
            alt="Temmack Logo" 
            className="w-16 h-16 object-contain brightness-0 invert opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'block';
            }}
          />
          <span className="text-white font-black text-xl hidden">TMK</span>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-10 w-20 h-20 bg-primary/30 rounded-full backdrop-blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -90, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 right-20 w-16 h-16 bg-accent/40 rounded-lg backdrop-blur-sm"
        />

        {/* Animated Text Badges */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-24 left-8 bg-white/15 backdrop-blur-sm rounded-lg p-4"
        >
          <p className="text-white text-sm font-medium">Clarity-First Approach</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-48 right-8 bg-white/15 backdrop-blur-sm rounded-lg p-4"
        >
          <p className="text-white text-sm font-medium">Strategic Communication</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-48 left-1/2 transform -translate-x-1/2 bg-white/15 backdrop-blur-sm rounded-lg p-4"
        >
          <p className="text-white text-sm font-medium">Results-Driven Solutions</p>
        </motion.div>

        {/* Particle Effects */}
        {Array.from({ length: 20 }).map((_, i) => (
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
              left: `${10 + (i * 4)}%`,
              top: `${20 + (i * 2)}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
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

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {businessImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RealisticModelBanner;