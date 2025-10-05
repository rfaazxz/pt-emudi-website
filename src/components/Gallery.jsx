import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1663045584825-90a22961a4de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFtYmFuZyUyMGVtYXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1737815914093-becb6c9ac064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFtYmFuZyUyMGVtYXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1726332458539-38e9a1b16b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVrZXJqYSUyMHRhbWJhbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1562167055-1afdc7ac7bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVrZXJqYSUyMHRhbWJhbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661963684691-f59590fb885b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBla2VyamElMjB0YW1iYW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664298475896-230e7b2c0ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBla2VyamElMjB0YW1iYW5nfGVufDB8fDB8fHww",
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Galeri Operasi Tambang
        </motion.h2>
        <p className="text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          Dokumentasi kegiatan eksplorasi, peralatan berat, dan hasil tambang
          emas serta nikel dari berbagai lokasi operasional kami.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-yellow-400/40"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Galeri ${index + 1}`}
                className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80 transition duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
