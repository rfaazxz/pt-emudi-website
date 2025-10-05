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
    <section id="features" className="py-24 bg-[#1f1f1f] text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-12 uppercase tracking-widest"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nilai Utama Kami
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-[#121212] p-8 rounded-xl shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
