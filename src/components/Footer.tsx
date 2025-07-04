import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <Newsletter />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo/Tmk logo.png" 
                alt="Temmack Solutions Logo" 
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  // Fallback to TMK text if logo fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-8 h-8 bg-primary rounded-lg items-center justify-center">
                <span className="text-white font-black text-sm">TMK</span>
              </div>
              <div>
                <span className="text-xl font-bold">Temmack™ Solutions</span>
                <p className="text-sm text-gray-300">Simplicity That Leaves a Mark</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2024 to simplify strategic marketing. We help brands remove confusion 
              from their message and marketing through clarity-first communication.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/temmack_solutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/temmack_solutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 mt-12">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;