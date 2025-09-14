import * as motion from 'motion/react-client';

export default function Home() {
  const boxVariants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 200,
      y: 200,
    },
    hover: {
      scale: 1.8,
      skewX: '10deg',
      transition: {
        duration: 0.5,
      },
    },
    click: {
      rotate: '10deg',
      skewY: '10deg',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="size-30 bg-yellow-400"
        drag
        dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
        whileDrag={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 900 }}
      ></motion.div>
    </>
  );
}
