'use client';

import { useState } from 'react';
import { motion, Reorder } from 'motion/react';

const StaggerComponent = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          <motion.div className="box gap-2 border border-white m-4"></motion.div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default StaggerComponent;
