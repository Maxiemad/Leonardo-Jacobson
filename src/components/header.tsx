import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import CustomButton from './custom-button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900 ${
        scrolled ? 'shadow-sm backdrop-blur-sm py-3' : 'py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src="/lovable-uploads/c743e49b-b243-442c-9dc9-a51904a225c9.png" 
              alt="Leonard Jacobson" 
              className="h-8 md:h-10"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <CustomButton size="lg" className="rounded-full">Enroll Now</CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-presence-800 hover:bg-presence-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 transform ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <CustomButton className="w-full">Enroll Now</CustomButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
