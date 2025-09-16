'use client';

import { motion } from 'motion/react';

const PulsatingEffect = () => {
  return (
    <motion.button
      initial={{ scale: [1, 1.1, 1] }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Pulsating Button
    </motion.button>
  );
};

export default PulsatingEffect;
