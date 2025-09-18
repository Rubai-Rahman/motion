import * as motion from 'motion/react-client';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeInComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 0.3 }}
      className="bg-blue-500 p-4"
    >
      <h1>This is FadeInComponent</h1>
    </motion.div>
  );
};

export default FadeInComponent;
