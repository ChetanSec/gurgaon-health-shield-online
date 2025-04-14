
import React from 'react';

interface InsuranceCardProps {
  name: string;
  logo: string;
  description: string;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ name, logo, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="h-20 w-40 flex items-center justify-center mb-4 bg-white rounded-md">
        <img src={logo} alt={`${name} logo`} className="max-h-16 max-w-32 object-contain" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-securenow-darkgray">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default InsuranceCard;
