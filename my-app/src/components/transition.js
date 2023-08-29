
// components/Transition.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }) => {
  return (
    <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        y: 10, 
        transition: { duration: 2, ease: "easeInOut" },
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeInOut"  },
        }}
      exit={{
        opacity: 0, 
        y: -10, 
        transition: { duration: 2, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
