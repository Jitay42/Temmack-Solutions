import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'TechFlow', logo: 'TF' },
    { name: 'DataSync', logo: 'DS' },
    { name: 'CloudVault', logo: 'CV' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DigitalEdge', logo: 'DE' },
    { name: 'SmartSolutions', logo: 'SS' }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Trusted by forward-thinking companies worldwide</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-white rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 shadow-sm hover:shadow-md grayscale hover:grayscale-0 border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-1">
                    <span className="text-white font-bold text-sm">{client.logo}</span>
                  </div>
                  <span className="text-xs font-medium text-secondary">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;