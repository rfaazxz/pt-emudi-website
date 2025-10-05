import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollToTop from "./ScrollToTop";


function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi section yang sedang terlihat
  const handleScroll = () => {
    const sections = ["hero", "features", "about", "projects", "team", "gallery", "statistics", "contact"];
    const scrollPos = window.scrollY + 100; // offset navbar

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPos) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll ke section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // offset navbar
        behavior: "smooth",
      });
      setIsOpen(false); // tutup menu mobile saat klik
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          PT EMUDI
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className={`hover:text-yellow-400 transition ${activeSection === "hero" ? "text-yellow-400 font-semibold" : ""}`}
            >
              Beranda
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features")}
              className={`hover:text-yellow-400 transition ${activeSection === "features" ? "text-yellow-400 font-semibold" : ""}`}
            >
              Layanan
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-yellow-400 transition ${activeSection === "about" ? "text-yellow-400 font-semibold" : ""}`}
            >
              Tentang Kami
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-yellow-400 transition ${activeSection === "contact" ? "text-yellow-400 font-semibold" : ""}`}
            >
              Kontak
            </button>
          </li>
        </ul>

        {/* Hamburger button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <li>
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left hover:text-yellow-400">
              Beranda
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left hover:text-yellow-400">
              Layanan
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-yellow-400">
              Tentang Kami
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-yellow-400">
              Kontak
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
