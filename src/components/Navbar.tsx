import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full bg-white/95 backdrop-blur-md z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-outfit tracking-tight hover:text-gray-700 transition-colors">
          KetoAI
        </a>
        <div className="flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-600 hover:text-black font-inter text-sm transition-colors"
          >
            How it works
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-600 hover:text-black font-inter text-sm transition-colors"
          >
            Features
          </button>
          <button className="bg-black text-white rounded-full px-6 py-2 font-outfit text-sm hover:bg-gray-800 transition-colors">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;