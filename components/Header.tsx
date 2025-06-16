"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("Header component mounted");
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled);
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a192f]/80 backdrop-blur-md border-b border-[#172a45]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#3b82f6]">
            Vedant Pimple
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'resume', 'blog', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-300 hover:text-[#3b82f6] transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
