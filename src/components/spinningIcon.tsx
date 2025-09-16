'use client';

import { motion } from 'motion/react';

const SpinningIcon = () => {
  return (
    <motion.img
      src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      initial={{ scale: 1 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      className="size-40 cursor-pointer"
    />
  );
};

export default SpinningIcon;
