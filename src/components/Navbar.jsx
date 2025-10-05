import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // Fungsi untuk mendeteksi section yang sedang terlihat
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

  // Fungsi smooth scroll ke section tertentu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // offset navbar
        behavior: "smooth",
      });
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

        {/* Menu */}
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
}

export default Navbar;
