import React from 'react';
import reliefops from '/src/assets/reliefops.png';
import ecocredit from '/src/assets/ecocredit.png';
import mulyabazzar from '/src/assets/mulyabazzar.png';
import yatranepal from '/src/assets/yatra.jpeg';

const logos = [
  { src: reliefops, alt: 'Relief Ops' },
  { src: ecocredit, alt: 'EcoCredit' },
  { src: mulyabazzar, alt: 'Mulya Bazzar' },
  { src: yatranepal, alt: 'YatrNepal' },
];

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Products</h2>
      <div className="flex justify-center items-center flex-wrap gap-24">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-24 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};
