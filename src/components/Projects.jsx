import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Tambang Emas Sulawesi Utara",
    description:
      "Salah satu tambang utama PT EMUDI yang berfokus pada eksplorasi dan produksi emas berkualitas tinggi.",
    image:
      "https://media.istockphoto.com/id/519759692/id/foto/wa-super-pit-hor-langit.webp?a=1&s=612x612&w=0&k=20&c=9XfLJ63EOgYrmBhS3Fy2MXGxK7A5x5Z6jpzWkiSE0O0=",
    location: "Sulawesi Utara, Indonesia",
  },
  {
    id: 2,
    name: "Tambang Nikel Kalimantan Timur",
    description:
      "Fasilitas modern dengan teknologi ramah lingkungan untuk penambangan dan pengolahan nikel.",
    image:
      "https://images.unsplash.com/photo-1628487749130-2d41acb1802a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFtYmFuZyUyMG5pa2VsfGVufDB8fDB8fHww",
    location: "Kalimantan Timur, Indonesia",
  },
  {
    id: 3,
    name: "Pusat Pengolahan Logam Jakarta",
    description:
      "Fasilitas utama untuk pemurnian logam mulia dan distribusi ke berbagai mitra industri.",
    image:
      "https://media.istockphoto.com/id/813603994/id/foto/lebah-emas-murni-yang-ditemukan-di-tambang-ada-di-tangan-manusia.webp?a=1&b=1&s=612x612&w=0&k=20&c=7yfoW7z9wUwdcGXGb-ildOnk8bNwxbtsIovHn4cMTYU=",
    location: "Jakarta, Indonesia",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Proyek & Operasi Tambang
        </motion.h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          PT EMUDI mengelola berbagai proyek strategis di seluruh Indonesia,
          dengan fokus pada keberlanjutan, keselamatan kerja, dan efisiensi
          produksi sumber daya alam.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-gray-400 text-xs italic">
                  📍 {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
