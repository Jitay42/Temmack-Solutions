import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const { t } = useTranslation();
  const [signupData, setSignupData] = useState({
    fullName: '',
    dateOfBirth: '',
    occupation: '',
    address: '',
    email: '',
    howHeard: '',
    phone: ''
  });

  const howHeardOptions = [
    'Google Search', 'Social Media', 'Referral', 'LinkedIn', 'Facebook',
    'Instagram', 'Blog/Article', 'Conference/Event', 'Other'
  ];

  const blogPosts = [
    {
      title: 'The Psychology of Clear Communication',
      excerpt: 'Understanding why your brain craves clarity and how to deliver it in every message you create.',
      author: 'Temmack Team',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Strategy',
      featured: true
    },
    {
      title: 'AI Prompts That Actually Work',
      excerpt: 'Stop getting generic results. Here\'s how to craft prompts that maintain your unique voice.',
      author: 'Lex O\'Brien',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'AI & Technology'
    },
    {
      title: 'Content Systems That Scale',
      excerpt: 'Build frameworks that maintain quality while reducing the mental load of content creation.',
      author: 'Jennifer Omawumi',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Content Strategy'
    },
    {
      title: 'The Clarity Framework',
      excerpt: 'Four questions that transform confusing messages into clear, compelling communication.',
      author: 'Tolulope Ajayi Grace',
      date: 'December 28, 2024',
      readTime: '5 min read',
      category: 'Copywriting'
    },
    {
      title: 'Brand Voice vs Brand Tone',
      excerpt: 'Understanding the difference between voice and tone can revolutionize your communication.',
      author: 'Johanson Fred',
      date: 'December 20, 2024',
      readTime: '4 min read',
      category: 'Brand Messaging'
    },
    {
      title: 'SEO That Actually Converts',
      excerpt: 'Beyond rankings: how to optimize for visibility AND conversion simultaneously.',
      author: 'David Akpovogaga',
      date: 'December 15, 2024',
      readTime: '9 min read',
      category: 'SEO'
    }
  ];

  const categories = ['All', 'Strategy', 'Copywriting', 'Brand Messaging', 'Content Strategy', 'AI & Technology', 'SEO'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blog signup:', signupData);
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-secondary mb-6"
          >
            Insights & Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Strategic thinking and practical advice for clearer, more effective communication.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-secondary hover:bg-primary/10 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-primary text-white rounded-3xl p-8 md:p-12"
            >
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].readTime}</span>
                </div>
              </div>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center group">
                Read Full Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(activeCategory === 'All' ? 1 : 0).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <div className="h-48 bg-primary/10 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center group">
                    Read Article
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get exclusive insights, resources, and strategies delivered to your inbox weekly.
              </p>
            </div>

            <form onSubmit={handleSignupSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  require
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  value={signupData.dateOfBirth}
                  onChange={handleSignupChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={signupData.occupation}
                  onChange={handleSignupChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={signupData.address}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={signupData.email}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />

              <select
                name="howHeard"
                value={signupData.howHeard}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              >
                <option value="">How did you hear about us?</option>
                {howHeardOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              {/* Google Captcha placeholder */}
              <div className="bg-gray-100 p-4 rounded-xl border-2 border-dashed border-gray-300 text-center">
                <p className="text-gray-500">Google reCAPTCHA will be integrated here</p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Subscribe to Insights
              </button>

              <p className="text-sm text-gray-500 text-center">
                {t('newsletter.microcopy')}
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;