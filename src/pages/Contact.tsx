import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, Upload, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    projectType: '',
    company: '',
    companyAddress: '',
    phone: '',
    email: '',
    country: '',
    otherCountry: '',
    howHeard: '',
    serviceSelection: [] as string[],
    message: '',
    file: null as File | null
  });

  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const countries = [
    'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'South Africa', 'Kenya', 'Ghana', 'France', 'Germany', 'Spain',
    'Brazil', 'Mexico', 'India', 'China', 'Japan', 'Other'
  ];

  const howHeardOptions = [
    'Google Search', 'Social Media', 'Referral', 'LinkedIn', 'Facebook',
    'Instagram', 'Blog/Article', 'Conference/Event', 'Other'
  ];

  const serviceOptions = {
    'Digital & UX Copywriting': [
      'Website Copy', 'UX Microcopy', 'SaaS Product Copy', 'Landing Pages', 'Brand Messaging'
    ],
    'Email Marketing': [
      'Funnel Strategy', 'Email Copy', 'Automation Setup', 'Cold Outreach'
    ],
    'SEO & Content': [
      'Blog SEO', 'Keyword Research', 'Content Strategy', 'SEO Audits'
    ],
    'Brand Strategy': [
      'Messaging Clarity', 'Voice Development', 'Strategic Audits'
    ],
    'AI Prompt Systems': [
      'Prompt Workflows', 'Chatbot Scripts', 'GPT Tool Design'
    ],
    'Social Media': [
      'Ad Copy', 'Campaign Captions', 'Optimization'
    ]
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Flatten serviceSelection array for Formspree
  const dataToSend = {
    ...formData,
    serviceSelection: formData.serviceSelection.join(', ')
  };

  try {
    const response = await fetch('https://formspree.io/f/mvgrnozr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      alert('✅ Your message has been sent! We will get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        projectType: '',
        company: '',
        companyAddress: '',
        phone: '',
        email: '',
        country: '',
        otherCountry: '',
        howHeard: '',
        serviceSelection: [],
        message: '',
        file: null
      });
    } else {
      alert('❌ Failed to send your message. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('❌ An error occurred. Please try again.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'country' && value !== 'Other') {
      setFormData({
        ...formData,
        [name]: value,
        otherCountry: ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file
    });
  };

  const toggleServiceExpansion = (service: string) => {
    setExpandedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleServiceSelection = (service: string, subService?: string) => {
    const serviceKey = subService ? `${service}: ${subService}` : service;
    setFormData(prev => ({
      ...prev,
      serviceSelection: prev.serviceSelection.includes(serviceKey)
        ? prev.serviceSelection.filter(s => s !== serviceKey)
        : [...prev.serviceSelection, serviceKey]
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="/logo/Tmk logo.png" 
                alt="Temmack Logo" 
                className="w-12 h-12 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="text-white font-black text-xl hidden">TMK</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-secondary mb-6"
          >
            Transform Your Business Communication
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Ready to turn confusion into clarity? Let's craft messaging that converts prospects into loyal customers.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Call Us</h3>
                      <p className="text-gray-600">+2349133167253</p>
                      <p className="text-sm text-gray-500">Available 9 AM - 6 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        3 Association Avenue, Eruwen,<br />
                        Ikorodu, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Response Time</h3>
                      <p className="text-gray-600">We'll respond within 24 hours</p>
                      <p className="text-sm text-gray-500">Usually much faster</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl">
                  <h3 className="font-semibold text-secondary mb-4">What Happens Next?</h3>
                  <div className="space-y-3">
                    {[
                      'We review your message within 24 hours',
                      'Schedule a brief discovery call',
                      'Discuss your needs and potential solutions',
                      'Receive a clear proposal with next steps'
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-secondary mb-2">
                    Start Your Clarity Journey
                  </h2>
                  <p className="text-gray-600">
                    Tell us about your project and let's create something amazing together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.firstName')} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.lastName')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-secondary mb-2">
                        What's Your Biggest Revenue Blocker? *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select your main challenge</option>
                        <option value="unclear-messaging">My message isn't clear enough</option>
                        <option value="low-conversions">My website isn't converting visitors</option>
                        <option value="content-strategy">I need a content strategy that works</option>
                        <option value="brand-voice">I need help defining my brand voice</option>
                        <option value="email-marketing">My email marketing needs improvement</option>
                        <option value="ai-integration">I want to integrate AI into my content</option>
                        <option value="complete-overhaul">I need a complete communication overhaul</option>
                        <option value="other">Something else entirely</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.company')} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyAddress" className="block text-sm font-semibold text-secondary mb-2">
                      {t('contact.companyAddress')}
                    </label>
                    <input
                      type="text"
                      id="companyAddress"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.phone')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 xxx xxx xxxx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.country')} *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    {formData.country === 'Other' ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <label htmlFor="otherCountry" className="block text-sm font-semibold text-secondary mb-2">
                          Please specify your country *
                        </label>
                        <input
                          type="text"
                          id="otherCountry"
                          name="otherCountry"
                          required={formData.country === 'Other'}
                          value={formData.otherCountry}
                          onChange={handleChange}
                          placeholder="Enter your country"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                        />
                      </motion.div>
                    ) : (
                      <div>
                        <label htmlFor="howHeard" className="block text-sm font-semibold text-secondary mb-2">
                          {t('contact.howHeard')}
                        </label>
                        <select
                          id="howHeard"
                          name="howHeard"
                          value={formData.howHeard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                        >
                          <option value="">Select an option</option>
                          {howHeardOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {formData.country === 'Other' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <label htmlFor="howHeard" className="block text-sm font-semibold text-secondary mb-2">
                        {t('contact.howHeard')}
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select an option</option>
                        {howHeardOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-4">
                      {t('contact.serviceSelection')}
                    </label>
                    <div className="space-y-3">
                      {Object.entries(serviceOptions).map(([service, subServices]) => (
                        <div key={service} className="border border-gray-200 rounded-xl bg-gray-50">
                          <button
                            type="button"
                            onClick={() => toggleServiceExpansion(service)}
                            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-100 rounded-xl transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={formData.serviceSelection.includes(service)}
                                onChange={() => handleServiceSelection(service)}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <span className="font-medium text-secondary">{service}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                              expandedServices.includes(service) ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {expandedServices.includes(service) && (
                            <div className="px-4 pb-3 space-y-2">
                              {subServices.map((subService) => (
                                <label key={subService} className="flex items-center space-x-3 text-sm">
                                  <input
                                    type="checkbox"
                                    checked={formData.serviceSelection.includes(`${service}: ${subService}`)}
                                    onChange={() => handleServiceSelection(service, subService)}
                                    className="w-3 h-3 text-primary border-gray-300 rounded focus:ring-primary"
                                  />
                                  <span className="text-gray-600">{subService}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      maxLength={10000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-vertical bg-gray-50 focus:bg-white"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/10,000 characters
                    </p>
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-sm font-semibold text-secondary mb-2">
                      {t('contact.fileUpload')}
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="file"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer flex items-center space-x-3 hover:bg-gray-50 bg-gray-50"
                      >
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">
                          {formData.file ? formData.file.name : 'Choose file (optional)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-3 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Start Your Transformation</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with next steps.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
