import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-secondary/90 shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="text-accent w-6 h-6" />
          <h1 className="text-xl font-bold text-accent">Nico Rolon</h1>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-accent transition-colors">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">Proyectos</a></li>
          <li><a href="#github" className="hover:text-accent transition-colors flex items-center gap-1">
            <span>🐙</span> GitHub
          </a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contacto</a></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden p-2 rounded-md text-accent hover:bg-accent/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[50%] md:hidden bg-secondary/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-end px-8 pt-24 space-y-8 text-lg font-medium">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent transition-colors duration-200"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent transition-colors duration-200"
          >
            Proyectos
          </a>
          <a
            href="#github"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent transition-colors duration-200 flex items-center gap-2"
          >
            <span>🐙</span> GitHub
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-accent transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
