'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="mb-4 p-2 bg-blue-500 text-white"
        onClick={() => setOpen(!open)}
      >
        Toggle Sidebar
      </button>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: open ? '0%' : '-100%' }}
        transition={{ duration: 1 }}
        exit={{ x: '-100%' }}
        className={`bg-teal-500 p-4 w-40 h-screen left-0 top-0 fixed z-10 ${
          open ? '' : '-translate-x-full'
        }`}
      >
        <h2>SideBar</h2>
      </motion.div>
    </div>
  );
};

export default Sidebar;
