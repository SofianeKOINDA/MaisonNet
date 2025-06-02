import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../controllers/LanguageController';
import { locations } from '../../models/data';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Maison<span className="text-secondary-400">Net</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Professional cleaning services throughout Canada. We create cleaner, healthier spaces for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {t('nav.book')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-400">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#residential" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#deep" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#specialized" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Specialized Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary-400" />
                <span className="text-gray-300">
                  Head Office: {locations[0].address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-secondary-400" />
                <a href={`tel:${locations[0].phone}`} className="text-gray-300 hover:text-secondary-400 transition-colors">
                  {locations[0].phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-secondary-400" />
                <a href={`mailto:info@maisonnet.ca`} className="text-gray-300 hover:text-secondary-400 transition-colors">
                  info@maisonnet.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MaisonNet. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-secondary-400 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;