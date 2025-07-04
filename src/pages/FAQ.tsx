import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What does prompt engineering include?',
      answer: 'Our prompt engineering service includes custom prompt development, AI workflow optimization, chatbot script creation, GPT tool design, and training on how to maintain your brand voice through AI-generated content. We also provide ongoing optimization and updates as AI technology evolves.'
    },
    {
      question: 'Can I combine services?',
      answer: 'Absolutely! We often recommend combining services for maximum impact. For example, pairing brand messaging with copywriting, or content strategy with SEO optimization. We\'ll create a custom package that addresses your specific needs and budget.'
    },
    {
      question: 'How soon can I get results?',
      answer: 'Timeline varies by service. Simple projects like email sequences can be completed in 1-2 weeks, while comprehensive brand messaging or content strategy projects typically take 3-4 weeks. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you work internationally?',
      answer: 'Yes! We work with clients across Africa, North America, Europe, and Asia. All our services are delivered remotely, and we accommodate different time zones for meetings and consultations.'
    },
    {
      question: 'What\'s included in a brand messaging project?',
      answer: 'Brand messaging projects include voice and tone guidelines, key messaging frameworks, value proposition development, audience persona refinement, and messaging hierarchy. You\'ll receive a comprehensive brand messaging guide that your entire team can use.'
    },
    {
      question: 'How do you ensure content matches our brand voice?',
      answer: 'We start every project with a thorough brand discovery process. We analyze your existing content, interview key stakeholders, and create detailed voice guidelines. All content goes through multiple review cycles to ensure perfect alignment with your brand.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer unlimited revisions within the project scope to ensure you\'re completely satisfied. If there are fundamental issues, we\'ll work with you to make it right. Our goal is your success, and we stand behind our work.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer retainer packages for ongoing support, including content reviews, strategy updates, and optimization. We also provide training sessions to help your team implement and maintain the strategies we develop.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with SaaS companies, Fintech brands, startups, SMEs, EdTech platforms, and NGOs. Our clarity-first approach works across industries, but we have particular expertise in technology and business services.'
    },
    {
      question: 'How do you measure success?',
      answer: 'Success metrics vary by project but typically include improved conversion rates, increased engagement, clearer brand perception, and better customer feedback. We establish specific KPIs at the project start and provide measurement recommendations.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about working with Temmack Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-secondary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:hello@temmack.com"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;