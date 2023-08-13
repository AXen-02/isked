"use client";

import React from "react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>Welcome to My Landing Page</motion.h1>
      <motion.p variants={itemVariants}>
        Explore the amazing features and benefits we offer.
      </motion.p>
      <motion.button variants={itemVariants}>Get Started</motion.button>
      <motion.img
        variants={itemVariants}
        src="/landing-image.jpg"
        alt="Landing Image"
      />
    </motion.div>
  );
};

export default LandingPage;
