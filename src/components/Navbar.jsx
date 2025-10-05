import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false); // untuk menu mobile

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
      setIsOpen(false); // tutup menu mobile setelah klik
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          PT EMUDI
        </h1>

        {/* Hamburger menu mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex space-x-6">
          {["hero", "features", "about", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`hover:text-yellow-400 transition ${
                  activeSection === section ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {section === "hero"
                  ? "Beranda"
                  : section === "features"
                  ? "Layanan"
                  : section === "about"
                  ? "Tentang Kami"
                  : "Kontak"}
              </button>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 lg:hidden">
            {["hero", "features", "about", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-yellow-400 transition text-lg ${
                    activeSection === section ? "text-yellow-400 font-semibold" : ""
                  }`}
                >
                  {section === "hero"
                    ? "Beranda"
                    : section === "features"
                    ? "Layanan"
                    : section === "about"
                    ? "Tentang Kami"
                    : "Kontak"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
