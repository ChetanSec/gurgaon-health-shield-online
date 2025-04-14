
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-securenow-blue">
      <div className="bg-securenow-gray p-3 inline-block rounded-full mb-4">
        <Icon className="h-6 w-6 text-securenow-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-securenow-darkgray">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
