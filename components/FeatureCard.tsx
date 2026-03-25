import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="group bg-brand-cream-light p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-gold/30 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="w-14 h-14 bg-brand-teal text-brand-gold rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-2xl text-brand-teal font-bold mb-4 text-center group-hover:text-brand-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="text-center mt-auto">
        <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider group-hover:text-brand-gold flex items-center justify-center gap-2 transition-colors">
          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;