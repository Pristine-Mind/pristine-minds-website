import React from 'react';

import icon1 from '../../assets/icons/blockchain.svg';
import icon3 from '../../assets/icons/cloud.svg';
import icon4 from '../../assets/icons/consulting.svg';
import icon5 from '../../assets/icons/development.svg';
import icon7 from '../../assets/icons/elearning.svg';
import icon8 from '../../assets/icons/training.svg';

const iconMap: Record<string, string> = {
  development: icon5,
  training: icon8,
  cloud: icon3,
  blockchain: icon1,
  elearning: icon7,
  consulting: icon4,
};

interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ image, alt, title, description }) => {
  const imageSrc = iconMap[image];

  return (
    <div className="bg-white p-8 flex flex-col h-[304px] w-[360px] items-start text-start rounded-2xl">
      <img src={imageSrc} alt={alt} className="w-[3.25rem] h-[3.25rem] pb-5"></img>
      <div>
        <p className="font-bold text-[1.25rem] mb-[12px]">{title}</p>
        <p className="text-[1.125rem]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
