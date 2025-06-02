import React from 'react';
import { Calendar, Send } from 'lucide-react';
import { useBookingForm } from '../../controllers/FormController';
import { useLanguage } from '../../controllers/LanguageController';
import { services } from '../../models/data';

const BookingForm: React.FC = () => {
  const { t } = useLanguage();
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    isSuccess,
    error,
    setIsSuccess
  } = useBookingForm();

  // Canadian provinces
  const provinces = [
    { code: 'AB', name: 'Alberta' },
    { code: 'BC', name: 'British Columbia' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' },
    { code: 'NL', name: 'Newfoundland and Labrador' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'NT', name: 'Northwest Territories' },
    { code: 'NU', name: 'Nunavut' },
    { code: 'ON', name: 'Ontario' },
    { code: 'PE', name: 'Prince Edward Island' },
    { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' },
    { code: 'YT', name: 'Yukon' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-secondary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Request Received!</h3>
          <p className="text-gray-600 mb-6">Thank you for your booking request. Our team will review your information and contact you within 24 hours to confirm your booking and provide a quote.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Make Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-4">{t('booking.title')}</h3>
          <p className="text-gray-600 mb-6">{t('booking.subtitle')}</p>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                {t('booking.form.name')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                {t('booking.form.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              {t('booking.form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">
              {t('booking.form.address')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-gray-700 mb-2">
                {t('booking.form.city')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="province" className="block text-gray-700 mb-2">
                {t('booking.form.province')} <span className="text-red-500">*</span>
              </label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              >
                <option value="">Select Province</option>
                {provinces.map((province) => (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="postalCode" className="block text-gray-700 mb-2">
                {t('booking.form.postal')}
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="serviceType" className="block text-gray-700 mb-2">
                {t('booking.form.service')} <span className="text-red-500">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              >
                <option value="">Select Service Type</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-gray-700 mb-2">
                {t('booking.form.date')}
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <Calendar className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              {t('booking.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Additional details about your cleaning needs..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                {t('booking.form.submit')}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;