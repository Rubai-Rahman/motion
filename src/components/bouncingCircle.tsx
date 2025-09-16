'use client';

import { motion } from 'motion/react';

const BouncingCircle = () => {
  return (
    <motion.div
      initial={{ y: [0, -100, 0] }}
      animate={{ y: [0, -100, 0] }}
      transition={{
        duration: 1,
        ease: 'easeIn',
        repeat: Infinity,
        repeatType: 'reverse',
        stiffness: 100,
      }}
      className=" border bg-blue-500 size-20 rounded-full"
    ></motion.div>
  );
};

export default BouncingCircle;
