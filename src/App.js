import React from "react";

// Import semua komponen website
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Landing Page */}
      <Hero />

      {/* Fitur Utama / Keunggulan */}
      <Features />

      {/* Tentang Kami */}
      <About />

      {/* Proyek & Operasi Tambang */}
      <Projects />

      {/* Tim & Staff Perusahaan */}
      <Team />

      {/* Galeri Foto / Video */}
      <Gallery />

      {/* Data Produksi & Statistik */}
      <Statistics />

      {/* Form Hubungi Kami + Peta */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
