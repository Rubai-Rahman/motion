'use client';

import { motion } from 'motion/react';

const BouncingBall = () => {
  return (
    <motion.div
      initial={{ y: [0, -100, 0] }}
      animate={{ y: [0, -100, 0] }}
      transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
      className=" size-20 rounded-full bg-blue-500"
    ></motion.div>
  );
};

export default BouncingBall;
