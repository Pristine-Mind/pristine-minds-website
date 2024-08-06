import React from 'react';

interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ image, alt, title, description }) => {
  return (
    <div className="bg-white p-8 flex flex-col h-[304px] w-[360px] items-start text-start rounded-2xl">
      <img src={`src/assets/icons/${image}.svg`} alt={alt} className="w-[3.25rem] h-[3.25rem] pb-5"></img>
      <div>
        <p className="font-bold text-[1.25rem] mb-[12px]">{title}</p>
        <p className="text-[1.125rem]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
