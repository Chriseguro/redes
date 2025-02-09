import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a href="/" className="flex items-center mr-16"> {/* Aumentamos el margen derecho */}
            <span className={`text-3xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              CHRISEGURO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#FF8A2B] text-lg`}>             
              Quiénes Somos
            </a>
            <a href="#services" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#FF8A2B] text-lg`}>
              Servicios
            </a>
            <a href="#resources" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#FF8A2B] text-lg`}>
              Recursos
            </a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#FF8A2B] text-lg`}>
              Contacto
            </a>
            <button className="bg-[#FF8A2B] text-white px-8 py-3 rounded-lg hover:bg-[#e67a1f] transition-colors text-lg font-semibold">
              QUIERO AHORRAR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-[#FF8A2B]"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-[#FF8A2B]"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 text-gray-600 hover:text-[#FF8A2B]"
                onClick={() => setIsOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-[#FF8A2B]"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <button
                className="w-full text-center bg-[#FF8A2B] text-white px-6 py-2 rounded-lg hover:bg-[#e67a1f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                QUIERO AHORRAR
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
