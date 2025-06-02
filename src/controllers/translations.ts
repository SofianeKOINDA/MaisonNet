import { Language } from '../models/types';

type TranslationKeys = {
  [key: string]: string;
};

type Translations = {
  [key in Language]: TranslationKeys;
};

export const translations: Translations = {
  en: {
    // Header & Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero Section
    'hero.title': 'Professional Cleaning Services',
    'hero.subtitle': 'Creating cleaner, healthier spaces across Canada',
    'hero.cta': 'Get a Quote',
    'hero.secondary': 'Learn More',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional cleaning solutions for every need',
    'services.cta': 'View Details',
    'services.from': 'From',
    
    // About Section
    'about.title': 'About MaisonNet',
    'about.subtitle': 'Your trusted cleaning partner since 2010',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide exceptional cleaning services that enhance the quality of life for our clients while maintaining the highest standards of professionalism and environmental responsibility.',
    'about.values': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.quality.text': 'We are committed to delivering superior cleaning services that exceed expectations.',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.text': 'We operate with honesty, transparency, and respect in all our interactions.',
    'about.values.reliability': 'Reliability',
    'about.values.reliability.text': 'We pride ourselves on punctuality, consistency, and dependability.',
    'about.values.sustainability': 'Sustainability',
    'about.values.sustainability.text': 'We use eco-friendly practices and products whenever possible.',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Read testimonials from our satisfied customers',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.locations': 'Our Locations',
    
    // Booking Form
    'booking.title': 'Request a Quote',
    'booking.subtitle': 'Fill out the form below to get a personalized quote',
    'booking.form.name': 'Full Name',
    'booking.form.email': 'Email Address',
    'booking.form.phone': 'Phone Number',
    'booking.form.address': 'Address',
    'booking.form.city': 'City',
    'booking.form.province': 'Province',
    'booking.form.postal': 'Postal Code',
    'booking.form.service': 'Service Type',
    'booking.form.date': 'Preferred Date',
    'booking.form.message': 'Additional Details',
    'booking.form.submit': 'Request Quote',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  fr: {
    // Header & Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver',
    
    // Hero Section
    'hero.title': 'Services de Nettoyage Professionnels',
    'hero.subtitle': 'Création d\'espaces plus propres et plus sains à travers le Canada',
    'hero.cta': 'Obtenir un Devis',
    'hero.secondary': 'En Savoir Plus',
    
    // Services Section
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions de nettoyage professionnelles pour tous les besoins',
    'services.cta': 'Voir les Détails',
    'services.from': 'À partir de',
    
    // About Section
    'about.title': 'À Propos de MaisonNet',
    'about.subtitle': 'Votre partenaire de nettoyage de confiance depuis 2010',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Fournir des services de nettoyage exceptionnels qui améliorent la qualité de vie de nos clients tout en maintenant les plus hauts standards de professionnalisme et de responsabilité environnementale.',
    'about.values': 'Nos Valeurs',
    'about.values.quality': 'Qualité',
    'about.values.quality.text': 'Nous nous engageons à fournir des services de nettoyage supérieurs qui dépassent les attentes.',
    'about.values.integrity': 'Intégrité',
    'about.values.integrity.text': 'Nous opérons avec honnêteté, transparence et respect dans toutes nos interactions.',
    'about.values.reliability': 'Fiabilité',
    'about.values.reliability.text': 'Nous sommes fiers de notre ponctualité, de notre constance et de notre fiabilité.',
    'about.values.sustainability': 'Durabilité',
    'about.values.sustainability.text': 'Nous utilisons des pratiques et des produits écologiques dans la mesure du possible.',
    
    // Testimonials Section
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Lisez les témoignages de nos clients satisfaits',
    
    // FAQ Section
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes sur nos services',
    
    // Contact Section
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prenez contact avec notre équipe',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.locations': 'Nos Emplacements',
    
    // Booking Form
    'booking.title': 'Demander un Devis',
    'booking.subtitle': 'Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé',
    'booking.form.name': 'Nom Complet',
    'booking.form.email': 'Adresse Email',
    'booking.form.phone': 'Numéro de Téléphone',
    'booking.form.address': 'Adresse',
    'booking.form.city': 'Ville',
    'booking.form.province': 'Province',
    'booking.form.postal': 'Code Postal',
    'booking.form.service': 'Type de Service',
    'booking.form.date': 'Date Préférée',
    'booking.form.message': 'Détails Supplémentaires',
    'booking.form.submit': 'Demander un Devis',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation'
  }
};