/**
 * Core data models for the cleaning company website
 */

// Service model
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

// Testimonial model
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

// Booking/Quote Request model
export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  serviceType: string;
  date: string;
  message: string;
}

// Contact form model
export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Language type
export type Language = 'en' | 'fr';