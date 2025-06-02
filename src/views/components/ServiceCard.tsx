import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../models/types';
import { useLanguage } from '../../controllers/LanguageController';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useLanguage();
  
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Star;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <IconComponent className="text-primary-600" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{t('services.from')}</span>
            <span className="text-lg font-bold text-primary-600">{service.price}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <LucideIcons.CheckCircle className="text-secondary-500 mt-1 mr-2" size={16} />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={`/services#${service.id}`} 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          {t('services.cta')} 
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;