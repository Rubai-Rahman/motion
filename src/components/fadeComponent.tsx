'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const FadeComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        exit={{ opacity: 0 }}
        className="bg-white p-4 size-40"
      >
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
    </div>
  );
};

export default FadeComponent;
