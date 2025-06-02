import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../controllers/LanguageController';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Maison<span className="text-secondary-500">Net</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className={`flex space-x-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <li>
              <Link to="/" className="hover:text-secondary-500 transition-colors">
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-secondary-500 transition-colors">
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-secondary-500 transition-colors">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-secondary-500 transition-colors">
                {t('nav.testimonials')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary-500 transition-colors">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-secondary-500 transition-colors`}
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>

          <Link
            to="/book"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            {t('nav.book')}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleLanguage}
            className={`mr-4 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-secondary-500 transition-colors`}
          >
            <Globe size={20} />
          </button>
          <button
            onClick={toggleMenu}
            className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-secondary-500`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-secondary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="block text-gray-700 hover:text-secondary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-secondary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link 
                to="/testimonials" 
                className="block text-gray-700 hover:text-secondary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-secondary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.book')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;