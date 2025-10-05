import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Gambar lokasi tambang */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1647969476632-17261bc91afa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lokasi Tambang Emas dan Nikel"
            className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[400px]"
          />
        </motion.div>

        {/* Teks deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-600">
            Tentang Kami
          </h2>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            <strong>PT. EMUDI (Emas Mulia Abadi)</strong> adalah perusahaan
            pertambangan yang berfokus pada eksplorasi dan pengolahan sumber daya alam,
            khususnya emas dan nikel. Berdiri sejak tahun <strong>2010</strong>, kami
            terus berkomitmen untuk menghadirkan hasil tambang berkualitas tinggi
            dengan memperhatikan keberlanjutan lingkungan dan kesejahteraan masyarakat
            sekitar.
          </p>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Dengan pengalaman lebih dari satu dekade, PT. EMUDI telah menjadi simbol
            kepercayaan dan integritas di industri pertambangan Indonesia. Kami
            mengedepankan teknologi modern, tenaga kerja profesional, dan praktik
            pertambangan yang bertanggung jawab.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md mx-auto lg:mx-0"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
