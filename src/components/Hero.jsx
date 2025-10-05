import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682141657112-9ad763085cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Parallax background motion */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517256064527-09c73fc73e62?auto=format&fit=crop&w=1920&q=80')",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      {/* Text content */}
      <motion.div
        className="relative text-center max-w-2xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#d4af37] mb-6 leading-tight drop-shadow-lg">
          Eksplorasi & Inovasi Tambang Emas dan Nikel Indonesia
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Membangun masa depan industri tambang dengan teknologi berkelanjutan
          dan efisiensi tinggi.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#d4af37] text-black font-bold rounded-lg shadow-lg hover:bg-[#c4a232] transition"
        >
          Jelajahi Operasi Kami
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
