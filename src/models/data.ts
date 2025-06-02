import { Service, Testimonial } from './types';

// Services data
export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Professional cleaning services for homes of all sizes. Regular, deep, or move-in/move-out cleaning options available.',
    icon: 'home',
    price: 'From $49.99',
    features: [
      'Thorough cleaning of all rooms',
      'Kitchen and bathroom sanitization',
      'Dusting and vacuuming',
      'Window cleaning',
      'Eco-friendly products available'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Keep your business spotless with our professional commercial cleaning services. Customized to your specific needs.',
    icon: 'building',
    price: 'From $199.99',
    features: [
      'Office spaces and common areas',
      'Restroom sanitization',
      'Floor maintenance',
      'Window cleaning',
      'Waste management'
    ]
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Intensive cleaning services to tackle built-up dirt and grime. Perfect for seasonal cleaning or special occasions.',
    icon: 'sparkles',
    price: 'From $249.99',
    features: [
      'Detailed cleaning of all surfaces',
      'Behind and under furniture',
      'Appliance cleaning inside and out',
      'Baseboards and trim cleaning',
      'Cabinet and drawer organization'
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Cleaning',
    description: 'Specific cleaning services for post-renovation, post-construction, or other specialized needs.',
    icon: 'construction',
    price: 'Custom quote',
    features: [
      'Post-construction cleanup',
      'Post-renovation cleaning',
      'Event preparation and cleanup',
      'Hoarding cleanup assistance',
      'Customized special projects'
    ]
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    location: 'Toronto, ON',
    rating: 5,
    text: 'I\'ve been using MaisonNet for my home cleaning for over a year now. The team is always punctual, thorough, and professional. My house has never looked better!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'As a business owner, I need reliable cleaning services for my office. MaisonNet delivers consistent quality every time. Their staff is courteous and their attention to detail is impressive.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Emma Chen',
    location: 'Montreal, QC',
    rating: 4,
    text: 'I hired MaisonNet for a deep cleaning before hosting a family gathering. They transformed my home in just a few hours. Very satisfied with their service!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'David Wilson',
    location: 'Calgary, AB',
    rating: 5,
    text: 'The specialized cleaning team helped me after my renovation project. They removed all the construction dust and debris, making my new space ready to enjoy. Highly recommend!',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// FAQ data
export const faqs = [
  {
    question: 'How often should I schedule cleaning services?',
    answer: 'It depends on your specific needs. For residential cleaning, many clients choose weekly, bi-weekly, or monthly services. Commercial spaces often require more frequent cleaning. We can help you determine the best schedule during your consultation.'
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, we bring all necessary cleaning supplies and equipment. However, if you prefer specific products to be used in your home or business, we\'re happy to accommodate your preferences.'
  },
  {
    question: 'Is your company insured and bonded?',
    answer: 'Yes, we are fully insured and bonded. All our cleaning professionals undergo thorough background checks and training before joining our team.'
  },
  {
    question: 'How do I schedule a cleaning service?',
    answer: 'You can schedule a cleaning service by filling out our online booking form, calling our customer service number, or sending us an email. We\'ll respond promptly to arrange a convenient time for your cleaning service.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require a 24-hour notice for any cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a cancellation fee.'
  },
  {
    question: 'Do you offer eco-friendly cleaning options?',
    answer: 'Yes, we offer eco-friendly cleaning options using environmentally safe products. Just let us know your preference when booking your service.'
  }
];

// Locations data
export const locations = [
  {
    city: 'Toronto',
    address: '123 Cleaning Ave, Toronto, ON M5V 2T6',
    phone: '(416) 555-1234',
    email: 'toronto@maisonnet.ca'
  },
  {
    city: 'Vancouver',
    address: '456 Sparkle Street, Vancouver, BC V6B 5T4',
    phone: '(604) 555-5678',
    email: 'vancouver@maisonnet.ca'
  },
  {
    city: 'Montreal',
    address: '789 Rue Propre, Montreal, QC H2Y 1Z5',
    phone: '(514) 555-9012',
    email: 'montreal@maisonnet.ca'
  },
  {
    city: 'Calgary',
    address: '101 Clean Crescent, Calgary, AB T2P 1J9',
    phone: '(403) 555-3456',
    email: 'calgary@maisonnet.ca'
  }
];