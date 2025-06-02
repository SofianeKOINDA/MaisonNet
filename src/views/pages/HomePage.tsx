import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../controllers/LanguageController';
import { services, testimonials } from '../../models/data';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cleaning Service"
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/book"
              className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 rounded-md font-semibold transition-colors shadow-lg"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md font-semibold transition-colors backdrop-blur-sm"
            >
              {t('hero.secondary')}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose MaisonNet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional cleaning services tailored to your specific needs.
              Our team of professionals ensures quality results every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <CheckCircle className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thorough Cleaning</h3>
              <p className="text-gray-600">
                Our cleaning experts leave no corner untouched, ensuring a spotless environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Professionals</h3>
              <p className="text-gray-600">
                Our vetted and trained staff are trustworthy and committed to excellence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Clock className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book your cleaning service at a time that works best for your schedule.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                We're not happy until you're happy with the results of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner Space?</h2>
              <p className="text-primary-100 max-w-xl">
                Let our professional team take care of your cleaning needs so you can focus on what matters most to you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book"
                className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-md font-semibold transition-colors"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
            >
              Read More Testimonials
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;