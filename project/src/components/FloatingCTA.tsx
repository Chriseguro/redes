import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <a
        href="https://wa.me/524794284913"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://instagram.com/CHRISEGURO"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E4405F] text-white p-3 rounded-full shadow-lg hover:bg-[#D93248] transition-colors"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default FloatingCTA;