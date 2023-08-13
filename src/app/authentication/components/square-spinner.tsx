"use client";
import React from "react";
import { motion } from "framer-motion";

const SquareSpinner: React.FC = () => {
  const duration = 15;
  const easing = [0.6, 0.01, 0.4, 0.1];
  return (
    <div className="absolute top-[50%] left-[20%] w-100 h-100 m-auto">
      <motion.div
        className="w-[50px] h-[50px] top-0 left-0 z-10 absolute bg-red-400"
        initial={{ translateX: 0, translateY: 0 }}
        animate={{
          translateX: [0, 0, -50, -50, 0],
          translateY: [0, -50, -50, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: easing,
        }}
      >
        {/* 1 */}
      </motion.div>

      <motion.div
        className="w-[50px] h-[50px] top-0 right-0 z-10 absolute bg-[#c3afb6]"
        initial={{ translateX: 0, translateY: 0 }}
        animate={{
          translateX: [0, 50, 50, 0, 0],
          translateY: [0, 0, -50, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: easing,
        }}
      >
        {/* 2 */}
      </motion.div>

      <motion.div
        className="w-[50px] h-[50px] bottom-0 left-0 z-10 absolute bg-blue-400"
        initial={{ translateX: 0, translateY: 0 }}
        animate={{
          translateX: [0, -50, -50, 0, 0],
          translateY: [0, 0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: easing,
        }}
      >
        {/* 3 */}
      </motion.div>

      <motion.div
        className="w-[50px] h-[50px] bottom-0 right-0 z-10 absolute bg-yellow-400"
        initial={{ translateX: 0, translateY: 0 }}
        animate={{
          translateX: [0, 0, 50, 50, 0],
          translateY: [0, 50, 50, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: easing,
        }}
      >
        {/* 4 */}
      </motion.div>
    </div>
  );
};

export default SquareSpinner;
