import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Search, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('error404.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('error404.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('error404.backHome')}
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-all duration-300 group"
            >
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('error404.exploreServices')}
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('error404.contactTemmack')}
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-secondary mb-3">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                Blog & Insights
              </Link>
              <Link to="/citable-pen" className="text-gray-600 hover:text-primary transition-colors">
                Learning Hub
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;