import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {/* Kolom 1: Logo & Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-3">
            PT. EMUDI
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Emas Mulia Abadi adalah perusahaan tambang emas dan nikel yang berkomitmen pada keberlanjutan, inovasi, serta kesejahteraan masyarakat sekitar area operasi.
          </p>
        </motion.div>

        {/* Kolom 2: Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4">Kontak Kami</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400" />
              <span>Konawe, Sulawesi Tenggara, Indonesia</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-400" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400" />
              <span>info@ptemudi.co.id</span>
            </li>
          </ul>
        </motion.div>

        {/* Kolom 3: Sosial Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-yellow-500/10 rounded-full hover:bg-yellow-400/20 transition">
              <Facebook size={20} className="text-yellow-400" />
            </a>
            <a href="#" className="p-2 bg-yellow-500/10 rounded-full hover:bg-yellow-400/20 transition">
              <Instagram size={20} className="text-yellow-400" />
            </a>
            <a href="#" className="p-2 bg-yellow-500/10 rounded-full hover:bg-yellow-400/20 transition">
              <Linkedin size={20} className="text-yellow-400" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Garis Bawah */}
      <div className="border-t border-yellow-500/10 mt-10 pt-6 text-center text-sm sm:text-base text-gray-500">
        © {new Date().getFullYear()} PT. Emas Mulia Abadi — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
