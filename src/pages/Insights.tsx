import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const Insights = () => {
  const featuredPost = {
    title: 'Why Your Website Copy Isn\'t Converting (And How to Fix It)',
    excerpt: 'Most websites fail because they talk about features instead of benefits. Here\'s how to flip the script and start connecting with your audience.',
    author: 'Temmack Team',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Copywriting',
    slug: 'website-copy-conversion'
  };

  const posts = [
    {
      title: 'The Clarity Framework: 4 Questions That Transform Your Messaging',
      excerpt: 'Before you write a single word, ask yourself these four questions. They\'ll save you hours and help you create messages that actually work.',
      author: 'Temmack Team',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Strategy',
      slug: 'clarity-framework-messaging'
    },
    {
      title: 'Content Systems That Scale: How to Create Once, Use Everywhere',
      excerpt: 'Stop reinventing the wheel every time you create content. Build systems that maintain quality while saving time and mental energy.',
      author: 'Temmack Team',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Content Systems',
      slug: 'content-systems-scale'
    },
    {
      title: 'AI Prompts That Sound Like You: A Strategic Approach',
      excerpt: 'Generic AI prompts produce generic results. Here\'s how to create custom prompts that maintain your authentic voice and brand personality.',
      author: 'Temmack Team',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'AI & Technology',
      slug: 'ai-prompts-brand-voice'
    },
    {
      title: 'Brand Voice vs. Brand Tone: What\'s the Difference?',
      excerpt: 'Your voice stays consistent, but your tone adapts to the situation. Understanding this difference is key to effective brand communication.',
      author: 'Temmack Team',
      date: 'December 20, 2024',
      readTime: '3 min read',
      category: 'Brand Messaging',
      slug: 'brand-voice-vs-tone'
    },
    {
      title: 'The Customer Journey Mapping Method That Actually Works',
      excerpt: 'Most customer journey maps gather dust in a drawer. Here\'s a practical approach that helps you create better content at every touchpoint.',
      author: 'Temmack Team',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Strategy',
      slug: 'customer-journey-mapping'
    },
    {
      title: 'Writing for Humans in an AI World',
      excerpt: 'As AI gets better at generating content, human connection becomes more valuable. Here\'s how to write in a way that AI can\'t replicate.',
      author: 'Temmack Team',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Copywriting',
      slug: 'writing-humans-ai-world'
    }
  ];

  const categories = ['All', 'Copywriting', 'Strategy', 'Brand Messaging', 'Content Systems', 'AI & Technology'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Insights for <span className="text-blue-600">clearer</span> communication
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Practical strategies, real examples, and honest perspectives on 
              creating communication that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-blue-200 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center group">
                Read the full article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-slate-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center group">
                      Read more
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get clarity delivered to your inbox
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join other business owners who get our weekly insights on clear communication, 
              strategic messaging, and content that converts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-slate-500 mt-4">
              No spam, no hype. Just helpful insights delivered weekly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to clarify your own message?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop guessing what your audience wants to hear. Let's create messaging that connects.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
          >
            Let's work together
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;