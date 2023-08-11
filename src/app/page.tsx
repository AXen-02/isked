"use client";
import AlertDemo from "@/components/AlertDemo";
import { Variants, motion } from "framer-motion";

const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = { duration: 0.5 };

export default function Home() {
  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      variants={pageTransition}
    >
      landing page here
      <AlertDemo title="Heya!" description="Welcome to Isked." />
    </motion.main>
  );
}
