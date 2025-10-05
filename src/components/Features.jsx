import React from "react";
import { motion } from "framer-motion";
import { Mountain, Leaf, Shield } from "lucide-react";

const features = [
  {
    icon: <Mountain size={48} className="text-[#d4af37]" />,
    title: "Tambang Berkualitas",
    desc: "Operasi di lokasi strategis dengan cadangan nikel dan emas berkualitas tinggi.",
  },
  {
    icon: <Shield size={48} className="text-[#d4af37]" />,
    title: "Keamanan & Integritas",
    desc: "Standar keamanan internasional dengan komitmen terhadap keselamatan pekerja.",
  },
  {
    icon: <Leaf size={48} className="text-[#d4af37]" />,
    title: "Berorientasi Lingkungan",
    desc: "Menjaga kelestarian alam melalui inovasi ramah lingkungan dalam setiap proses tambang.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 bg-[#1f1f1f] text-center px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37] mb-10 sm:mb-12 uppercase tracking-widest"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nilai Utama Kami
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-[#121212] p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
