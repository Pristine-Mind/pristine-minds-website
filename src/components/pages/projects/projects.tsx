import React from 'react';
import { motion } from 'framer-motion';
import reliefops from '/src/assets/reliefops.png';
import ecocredit from '/src/assets/ecocredit.png';
import mulyabazzar from '/src/assets/mulyabazzar.png';
import yatranepal from '/src/assets/yatra.jpeg';

const logos = [
  { src: reliefops, alt: 'Relief Ops' },
  { src: ecocredit, alt: 'EcoCredit' },
  { src: mulyabazzar, alt: 'Mulya Bazzar' },
  { src: yatranepal, alt: 'Yatra Nepal' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Projects: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-14 px-8"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h2>
      <motion.div className="flex justify-center items-center flex-wrap gap-24" variants={containerVariants}>
        {logos.map((logo, idx) => (
          <motion.img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-24 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
