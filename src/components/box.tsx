'use client';

import { motion } from 'motion/react';

const Box = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className=" border bg-blue-500 size-20 "
    ></motion.div>
  );
};

export default Box;
