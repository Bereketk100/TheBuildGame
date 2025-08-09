import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    landType: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    reason: '',
    timeframe: 'flexible',
    additionalInfo: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    fetch("https://formcarry.com/s/lcSt2OBTePi", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          propertyType: '',
          landType: '',
          bedrooms: '',
          bathrooms: '',
          squareFeet: '',
          yearBuilt: '',
          reason: '',
          timeframe: 'flexible',
          additionalInfo: ''
        });
      } else {
        setError(response.message);
      }
    })
    .catch(error => {
      setError(error.message ? error.message : error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 shadow-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Thank You!</h3>
        <p className="text-gray-300 text-lg mb-6">Your property details have been submitted successfully.</p>
        <p className="text-gray-400">Our team will review your submission and get back to you within 24 hours with a cash offer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-4">
          {error}
        </div>
      )}
      
      {/* Contact Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
        />
      </div>

      {/* Property Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Property Details</h3>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address"
          required
          className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
        />
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="ZIP Code"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
      </div>

      {/* Property Specifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Property Specifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          >
            <option value="">Select Property Type</option>
            <option value="land">Land</option>
            <option value="single-family">Single Family Home</option>
            <option value="multi-family">Multi-Family Home</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condo</option>
            <option value="mobile-home">Mobile Home</option>
            <option value="other">Other</option>
          </select>
          <input
            type="number"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            placeholder="Year Built"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
        
        {/* Land Type Dropdown - only show if Land is selected */}
        {formData.propertyType === 'land' && (
          <div className="grid md:grid-cols-1 gap-4">
            <select
              name="landType"
              value={formData.landType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
            >
              <option value="">Select Land Type</option>
              <option value="residential">Residential Land</option>
              <option value="commercial">Commercial Land</option>
              <option value="agricultural">Agricultural Land</option>
              <option value="industrial">Industrial Land</option>
              <option value="recreational">Recreational Land</option>
              <option value="vacant">Vacant Lot</option>
              <option value="development">Development Land</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="# of Bedrooms"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="# of Bathrooms"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
          <input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            placeholder="Square Feet"
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Additional Information</h3>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300"
        >
          <option value="">Reason for Selling</option>
          <option value="relocation">Relocation</option>
          <option value="financial">Financial Reasons</option>
          <option value="upgrade">Upgrading</option>
          <option value="downsize">Downsizing</option>
          <option value="inherited">Inherited Property</option>
          <option value="other">Other</option>
        </select>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <span className="text-emerald-400">Property Description</span> 
            <span className="block text-xs text-gray-400 mt-1">
              Please provide detailed information about your property including parcel ID and/or complete property address
            </span>
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Describe your property in detail - include parcel ID, address, condition, features, size, etc."
            rows={4}
            maxLength={150}
            required
            className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-white/5 rounded-xl focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-400 transition-all duration-300 resize-none"
          ></textarea>
          <div className="flex justify-between items-center text-xs">
            <span className={`${formData.additionalInfo.length < 150 ? 'text-red-400' : 'text-emerald-400'}`}>
              {formData.additionalInfo.length < 150 ? 'Please provide more details to reach 150 characters' : 'Perfect! Description complete'}
            </span>
            <span className="text-gray-400">
              {formData.additionalInfo.length}/150 characters
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || formData.additionalInfo.length < 150}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-emerald-500/30 backdrop-blur-xl"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : formData.additionalInfo.length < 150 ? (
            `Complete Description (${150 - formData.additionalInfo.length} more characters needed)`
          ) : (
            'Get Your Cash Offer Now'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
