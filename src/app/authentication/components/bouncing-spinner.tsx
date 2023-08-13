"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const BouncingSpinner: React.FC = () => {
  const shadowControl = useAnimation();
  const spinnerControl = useAnimation();

  const animateSpinner = async () => {
    while (true) {
      await spinnerControl.start({
        borderBottomRightRadius: ["0px", "3px", "40px", "3px", "0px"],
        translateY: ["0px", "9px", "18px", "9px", "0px"],
        scale: [1, 1, 0.9, 1, 1],
        rotate: ["0deg", "22.5deg", "45deg", "67.5deg", "90deg"],
        transition: { duration: 0.5, ease: "linear" },
      });
    }
  };

  const animateShadow = async () => {
    while (true) {
      await shadowControl.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, ease: "linear" },
      });
    }
  };

  useEffect(() => {
    animateSpinner();
    animateShadow();
  }, []); // Run animations once after component mounts

  return (
    <div className="w-48 h-48 m-auto relative">
      <motion.div
        className="w-48 h-5 bg-red-300 absolute top-60 left-0 rounded-full"
        animate={shadowControl}
      />
      <motion.div
        className="w-full h-full bg-red-500 absolute top-0 left-0 rounded-md"
        animate={spinnerControl}
      />
    </div>
  );
};

export default BouncingSpinner;
