
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../type';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: `#${Section.About}` },
    { name: 'Skills', href: `#${Section.Skills}` },
    { name: 'Experience', href: `#${Section.Experience}` },
    { name: 'Projects', href: `#${Section.Projects}` },
    { name: 'Contact', href: `#${Section.Contact}` },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg p-1"
              aria-label="Back to top"
            >
              Shraddha
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-violet-400 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-slate-300 font-bold text-lg border-b border-slate-800 last:border-0"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
