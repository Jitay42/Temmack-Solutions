import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle, Target, Users, Zap, Search, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: MessageCircle,
      title: t('services.digitalCopywriting.title'),
      description: t('services.digitalCopywriting.description'),
      features: ['Website Copy', 'UX Microcopy', 'SaaS Product Copy', 'Landing Pages', 'Brand Messaging'],
      color: 'bg-primary'
    },
    {
      icon: Mail,
      title: t('services.emailMarketing.title'),
      description: t('services.emailMarketing.description'),
      features: ['Funnel Strategy', 'Email Copy', 'Automation Setup', 'Cold Outreach'],
      color: 'bg-accent'
    },
    {
      icon: Target,
      title: t('services.contentStrategy.title'),
      description: 'Blog SEO, Keyword Research, Content Strategy, SEO Audits',
      features: ['Blog SEO', 'Keyword Research', 'Content Strategy', 'SEO Audits'],
      color: 'bg-primary'
    },
    {
      icon: Users,
      title: t('services.brandStrategy.title'),
      description: t('services.brandStrategy.description'),
      features: ['Messaging Clarity', 'Voice Development', 'Strategic Audits'],
      color: 'bg-accent'
    },
    {
      icon: Zap,
      title: t('services.aiPrompts.title'),
      description: t('services.aiPrompts.description'),
      features: ['Prompt Workflows', 'Chatbot Scripts', 'GPT Tool Design'],
      color: 'bg-primary'
    },
    {
      icon: Search,
      title: t('services.socialMedia.title'),
      description: t('services.socialMedia.description'),
      features: ['Ad Copy', 'Campaign Captions', 'Optimization'],
      color: 'bg-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-secondary mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic solutions that transform how you communicate with your audience.
          </motion.p>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-secondary hover:bg-primary/10 border border-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${services[activeService].color} flex items-center justify-center`}>
                    {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-secondary">
                      {services[activeService].title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-secondary font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual */}
              <div className={`relative h-96 rounded-3xl ${services[activeService].color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {React.createElement(services[activeService].icon, { className: "w-32 h-32 text-white/30" })}
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="font-semibold text-secondary mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Transform your communication strategy
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A strategic approach that ensures every solution is tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your business, audience, and goals to understand what makes you unique.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a custom approach based on your specific needs and market position.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We implement the strategy with precision, keeping you involved every step of the way.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss which service will have the biggest impact on your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;