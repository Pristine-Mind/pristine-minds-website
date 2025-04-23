import React from 'react';

import iconBlockchain from '@/assets/icons/blockchain.svg';
import iconCloud from '@/assets/icons/cloud.svg';
import iconConsulting from '@/assets/icons/consulting.svg';
import iconDevelopment from '@/assets/icons/development.svg';
import iconElearning from '@/assets/icons/elearning.svg';
import iconTraining from '@/assets/icons/training.svg';

const iconMap: Record<string, string> = {
  development: iconDevelopment,
  training: iconTraining,
  cloud: iconCloud,
  blockchain: iconBlockchain,
  elearning: iconElearning,
  consulting: iconConsulting,
};

interface Props {
  image: keyof typeof iconMap;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ image, alt, title, description }) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
    <img src={iconMap[image]} alt={alt} className="mb-4 h-12 w-12 shrink-0 object-contain" />
    <h4 className="mb-2 text-lg font-bold leading-snug md:text-xl">{title}</h4>
    <p className="text-sm leading-6 text-gray-700 md:text-base">{description}</p>
  </div>
);

export default ServiceCard;
