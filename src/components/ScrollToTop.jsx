import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["hero", "features", "about", "projects", "team", "gallery", "statistics", "contact"];
    const scrollPos = window.scrollY + 100;

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-400 cursor-pointer" onClick={() => scrollToSection("hero")}>
          PT EMUDI
        </h1>

        <ul className="hidden md:flex space-x-6">
          {["hero", "features", "about", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`hover:text-yellow-400 transition ${activeSection === section ? "text-yellow-400 font-semibold" : ""}`}
              >
                {section === "hero" ? "Beranda" : section === "features" ? "Layanan" : section === "about" ? "Tentang Kami" : "Kontak"}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {["hero", "features", "about", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="block w-full text-left hover:text-yellow-400"
              >
                {section === "hero" ? "Beranda" : section === "features" ? "Layanan" : section === "about" ? "Tentang Kami" : "Kontak"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
