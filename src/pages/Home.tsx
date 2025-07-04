import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Lightbulb, CheckCircle, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RealisticModelBanner from '../components/RealisticModelBanner';
import ServiceCards from '../components/ServiceCards';

const Home = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Johanson Fred',
      title: 'SEO & Social Media Strategist',
      description: 'Bridges the gap between visibility and value through strategic content optimization and search-driven storytelling.',
      image: '/team/Fred Johanson.jpg'
    },
    {
      name: 'Jennifer Omawumi',
      title: 'Digital Marketer',
      description: 'Architects growth strategies through data-driven campaigns and conversion-focused messaging that delivers measurable results.',
      image: '/team/Jennifer Omawumi.png'
    },
    {
      name: 'Lex O\'Brien',
      title: 'Chief HOD, AI Prompt Engineer',
      description: 'Engineers AI-powered marketing systems that scale human creativity while maintaining authentic brand voice.',
      image: '/team/lex O\'brian.png'
    },
    {
      name: 'David Akpovogaga',
      title: 'UX/UI Designer & DevOps',
      description: 'Crafts digital experiences that seamlessly blend aesthetic excellence with psychological conversion principles.',
      image: '/team/David Akpovogaga.png'
    },
    {
      name: 'Tolulope Ajayi Grace',
      title: 'Senior Content Strategist',
      description: 'Transforms complex business challenges into clear, compelling narratives that resonate with audiences and drive action.',
      image: '/team/Tolulope Grace Ajayi.png'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      comment: 'Temmack transformed our entire communication strategy. Our conversion rates increased by 340% within 3 months. Their clarity-first approach is revolutionary.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'InnovateLab',
      role: 'Marketing Director',
      comment: 'Working with Temmack was a game-changer. They helped us find our voice and communicate our complex AI solutions in a way that actually resonates with our audience.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      company: 'CloudVault',
      role: 'Founder',
      comment: 'The team at Temmack doesn\'t just write copy - they craft strategic communication that drives real business results. Our email open rates doubled overnight.',
      rating: 5
    }
  ];

  const services = [
    {
      title: 'Digital & UX Copywriting',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Email Marketing & Automation',
      image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Content Strategy & SEO',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Brand Strategy & Messaging',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'AI Prompt Systems',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Social Media Strategy',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Realistic Model Banner */}
      <RealisticModelBanner />

      {/* Service Cards */}
      <ServiceCards />

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              The Story Behind Temmack
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>It started with a frustration.</strong> Too many brilliant businesses were drowning in their own complexity. 
                Great products hidden behind confusing websites. Powerful services buried under buzzword-heavy copy. 
                Smart entrepreneurs struggling to explain what they actually do.
              </p>
              <p>
                <strong>We knew there had to be a better way.</strong> In 2024, we founded Temmack with a simple mission: 
                help businesses say what they mean, mean what they say, and connect authentically with the people they serve.
              </p>
              <p>
                <strong>Our vision is bold yet simple:</strong> To make clarity a competitive advantage. 
                We believe that in a world full of noise, the brands that speak clearly will be the ones that win.
              </p>
              <p>
                <strong>Our passion drives everything we do:</strong> We're obsessed with making communication effortless and effective. 
                Because when your message is clear, everything else becomes possible.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Strategy First',
                description: 'Every word serves a purpose. We start with strategy, not tactics, ensuring your message aligns with your business goals.'
              },
              {
                icon: Users,
                title: 'Human Connection',
                description: 'We write for humans, not algorithms. Our copy creates genuine connections that turn strangers into customers.'
              },
              {
                icon: Lightbulb,
                title: 'Clarity Over Cleverness',
                description: 'We choose understanding over impression. Clear communication always wins over clever wordplay.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Meet the Clarity Crew</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five strategists, one mission: helping you communicate with purpose and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.location.href = '/contact'}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 border border-gray-100"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 text-center group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4 text-center text-sm">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {member.description}
                </p>
                <div className="mt-6 text-center">
                  <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 px-3 py-1 rounded-full">
                    Click to get started →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Why Clarity Changes Everything
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In a world drowning in information, clarity isn't just nice to have—it's your competitive advantage. 
                When your message is clear, your audience doesn't have to work to understand you. They can focus 
                on what matters: deciding to work with you.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Strategy before writing — Every word serves a purpose',
                  'Psychology-backed messaging — We understand what motivates action',
                  'Conversion-first UX — Beautiful design that actually works'
                ].map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-secondary">{principle}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={scrollToContact}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors text-lg bg-transparent border-2 border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white active:bg-accent active:border-accent duration-500"
              >
                Experience the Difference
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <blockquote className="text-2xl font-medium text-secondary mb-6 leading-relaxed">
                    "The best marketing doesn't feel like marketing. It feels like a helpful conversation 
                    with someone who truly understands your challenges."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <img 
                        src="/logo/Tmk logo.png" 
                        alt="Temmack Logo" 
                        className="w-8 h-8 object-contain brightness-0 invert"
                        onError={(e) => {
                          // Fallback to TMK text if logo fails
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <span className="text-white font-bold hidden">TMK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">The Temmack Philosophy</p>
                      <p className="text-gray-600 text-sm">Clarity in action</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#3b6eac' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real results from real businesses who chose clarity over confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden group hover:bg-white/20 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-12 h-12 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-white mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/80 font-medium text-sm">{testimonial.role}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Transform Your Communication
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Six strategic services designed to clarify your message, connect with your audience, 
              and convert prospects into loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => window.location.href = '/contact'}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-white/20"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
                </div>

                {/* Floating Animation Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full backdrop-blur-sm"
                />

                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    x: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute bottom-4 left-4 w-6 h-6 bg-white/40 rounded-lg backdrop-blur-sm"
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-96 flex flex-col justify-between">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4 drop-shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  <motion.div 
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="w-full bg-primary text-white border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-accent hover:border-accent active:bg-accent active:border-accent transition-all duration-500 backdrop-blur-sm shadow-lg">
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.button
              onClick={scrollToContact}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg group"
            >
              Start Your Clarity Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop guessing what your audience wants to hear. Let's create messaging that connects, 
              converts, and grows your business with clarity and purpose.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg group active:bg-accent active:border-accent active:text-white"
            >
              Let's Get Clear Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;