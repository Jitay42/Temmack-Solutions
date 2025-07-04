import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Download, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const CitablePen = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Copywriting', 'Strategy', 'AI Tools', 'Templates', 'Guides'];

  const resources = [
    {
      title: 'The Complete Copywriting Toolkit',
      description: 'Essential frameworks, templates, and checklists for writing copy that converts.',
      category: 'Copywriting',
      type: 'Free',
      downloads: 1247,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'AI Prompt Library for Marketers',
      description: 'Over 100 tested prompts for content creation, strategy, and optimization.',
      category: 'AI Tools',
      type: 'Premium',
      price: '$29',
      downloads: 892,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Brand Voice Development Guide',
      description: 'Step-by-step process to define and implement your unique brand voice.',
      category: 'Strategy',
      type: 'Free',
      downloads: 2156,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Email Sequence Templates',
      description: 'Ready-to-use email templates for onboarding, nurturing, and sales.',
      category: 'Templates',
      type: 'Premium',
      price: '$19',
      downloads: 634,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Content Strategy Playbook',
      description: 'Complete guide to building a content strategy that drives results.',
      category: 'Strategy',
      type: 'Premium',
      price: '$39',
      downloads: 445,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      title: 'Website Copy Checklist',
      description: 'Ensure your website copy converts with this comprehensive checklist.',
      category: 'Copywriting',
      type: 'Free',
      downloads: 3421,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = [
    {
      title: 'How to Build a Content System That Scales',
      excerpt: 'Learn the frameworks top companies use to create consistent, high-quality content.',
      readTime: '8 min read',
      category: 'Strategy'
    },
    {
      title: 'The Psychology Behind Persuasive Copy',
      excerpt: 'Understanding cognitive biases and psychological triggers in copywriting.',
      readTime: '6 min read',
      category: 'Copywriting'
    },
    {
      title: 'AI Tools for Content Creators',
      excerpt: 'A comprehensive review of the best AI tools for content creation and optimization.',
      readTime: '10 min read',
      category: 'AI Tools'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              {t('citablePen.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('citablePen.subtitle')}
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t('citablePen.startLearning')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Shelf */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Resource Shelf</h2>
            <p className="text-lg text-gray-600">Ebooks, templates, and tools to accelerate your growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      resource.type === 'Free' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {resource.type === 'Free' ? 'Free' : resource.price}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 group">
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    <span>{resource.type === 'Free' ? 'Download Free' : 'Purchase'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-600">In-depth guides and insights from our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center group">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with New Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we release new ebooks, templates, and learning materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-secondary"
              />
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CitablePen;