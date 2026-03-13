"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
  <section id="hero" className="text-center pt-32 pb-0 px-4">      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm <span className="text-purple-400">Pavithra!</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-xl max-w-2xl mx-auto"
      >
        Building high performance digital experiences and scalable web applications.
      </motion.p>
    </section>
  );
}