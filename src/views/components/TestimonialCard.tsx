import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../models/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {renderStars()}
      </div>
      
      <p className="text-gray-700 italic">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;