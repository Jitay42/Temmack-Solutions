import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Target, Lightbulb, Search, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCards = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      icon: MessageCircle,
      title: t('services.digitalCopywriting.title'),
      description: t('services.digitalCopywriting.description'),
      color: 'from-primary to-primary/80',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Mail,
      title: t('services.emailMarketing.title'),
      description: t('services.emailMarketing.description'),
      color: 'from-accent to-accent/80',
      image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Target,
      title: t('services.contentStrategy.title'),
      description: t('services.contentStrategy.description'),
      color: 'from-primary to-accent',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Lightbulb,
      title: t('services.brandStrategy.title'),
      description: t('services.brandStrategy.description'),
      color: 'from-accent to-primary',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Search,
      title: 'SEO & Content',
      description: 'Blog SEO, Keyword Research, Content Strategy, SEO Audits',
      color: 'from-primary/80 to-accent/80',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Zap,
      title: t('services.aiPrompts.title'),
      description: t('services.aiPrompts.description'),
      color: 'from-accent/80 to-primary/80',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic solutions that transform how you communicate with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: activeCard === index ? 1.05 : 1,
                rotateY: activeCard === index ? 5 : 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 }
              }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500 ${
                activeCard === index ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
              }`}
              onClick={scrollToServices}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeCard === index 
                    ? 'bg-gradient-to-br from-primary/90 to-accent/90' 
                    : 'bg-white/95'
                }`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
                <div>
                  <motion.div
                    animate={{ 
                      rotate: activeCard === index ? 360 : 0,
                      scale: activeCard === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className={`w-12 h-12 mb-6 transition-all duration-500 ${
                      activeCard === index ? 'text-white' : 'text-primary'
                    }`} />
                  </motion.div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                    activeCard === index ? 'text-white' : 'text-secondary'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    activeCard === index ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Active Indicator */}
                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ${
                  activeCard === index ? 'bg-white/30' : 'bg-primary/20'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={scrollToServices}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-transparent text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg group active:bg-accent active:border-accent"
          >
            {t('services.seeServices')}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;