import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-4">
          Stay Clear, Stay Ahead
        </h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get weekly insights on clarity, strategy, and communication that converts.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-secondary"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {t('newsletter.subscribe')}
          </button>
        </form>
        
        <p className="text-sm text-white/70 mt-4">
          {t('newsletter.microcopy')}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;