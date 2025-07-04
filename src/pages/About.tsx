import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Clarity isn't an accident. <span className="text-blue-600">It's a choice.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We believe every business deserves to be understood. That's why we've dedicated 
              ourselves to cutting through the noise and helping brands communicate clearly.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                We started because we were frustrated too
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Too many brilliant businesses were struggling to explain what they do. 
                Great products hidden behind confusing websites. Powerful services 
                buried under buzzword-heavy copy.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We knew there had to be a better way. A way to communicate that felt 
                human, honest, and helpful. A way to connect with customers without 
                the jargon, hype, or manipulation.
              </p>
              <p className="text-lg text-slate-600">
                That's why Temmack exists. To help businesses say what they mean, 
                mean what they say, and connect authentically with the people they serve.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <blockquote className="text-xl text-slate-700 italic mb-6">
                "The best marketing doesn't feel like marketing. It feels like a helpful 
                conversation with someone who truly understands your challenges."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">T</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">The Temmack Team</p>
                  <p className="text-slate-600">Our guiding philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What guides everything we do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These aren't just values on a wall. They're the principles that shape 
              every decision, every conversation, and every piece of work we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: 'Empathy First',
                description: 'We start by understanding your world—your challenges, your customers, your goals. Because you can\'t solve what you don\'t understand.',
                principles: [
                  'Listen more than we speak',
                  'Ask questions that matter',
                  'See your business through your eyes',
                  'Respect your expertise and experience'
                ]
              },
              {
                icon: Shield,
                title: 'Honest Communication',
                description: 'No fluff, no buzzwords, no empty promises. We tell you what we think, even when it\'s not what you want to hear.',
                principles: [
                  'Say what we mean clearly',
                  'Admit when we don\'t know something',
                  'Set realistic expectations',
                  'Deliver what we promise'
                ]
              },
              {
                icon: Lightbulb,
                title: 'Strategic Thinking',
                description: 'Every word serves a purpose. Every message has a strategy behind it. We don\'t just create—we create with intention.',
                principles: [
                  'Start with strategy, not tactics',
                  'Think systems, not just pieces',
                  'Measure what matters',
                  'Build for the long term'
                ]
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <value.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 mb-6">{value.description}</p>
                <ul className="space-y-2">
                  {value.principles.map((principle, principleIndex) => (
                    <li key={principleIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Promise to You</h3>
              <div className="space-y-4">
                {[
                  'We\'ll never use jargon when plain language works better',
                  'We\'ll challenge your assumptions (respectfully) when needed',
                  'We\'ll deliver work that makes your life easier, not harder',
                  'We\'ll treat your business like it matters—because it does'
                ].map((promise, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{promise}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How we're different
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We're not here to impress you with big words or complex strategies. 
                We're here to help you communicate so clearly that your customers 
                can't help but understand the value you provide.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                That means we skip the industry jargon, avoid the latest marketing fads, 
                and focus on what actually works: clear, honest, strategic communication 
                that respects your audience's intelligence.
              </p>
              <Link 
                to="/services" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
              >
                See how we work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to work with people who get it?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's have an honest conversation about your communication challenges 
            and how we can help solve them.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
          >
            Let's talk
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;