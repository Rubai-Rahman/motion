'use client';

import { motion } from 'motion/react';

const MotionCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.9, rotate: -3 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="p-4">
        <h1>This is motion-card</h1>
      </div>
      <div className="p-4">
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default MotionCard;
