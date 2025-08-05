import React, { useState } from 'react';

const ServiceCard = ({ title, description, icon, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 flex flex-col h-full transform hover:scale-105 transition-all duration-300">
        <div>
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="mt-auto pt-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center space-x-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
          >
            <span>Learn More</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-white/10 shadow-2xl transform scale-100 transition-all">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {title}
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-300">
              {details && details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
