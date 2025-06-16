"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("Hero component mounted");
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Hero: Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-gradient">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-blue-400">
              Vedant Pimple
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Final-year B.Tech student at <span className="text-accent-500 font-semibold">IIT Indore</span>,
            specializing in Metallurgical Engineering and Materials Science with a passion for{' '}
            <span className="text-accent-500 font-semibold">AI/ML</span> and{' '}
            <span className="text-accent-500 font-semibold">Web Development</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 text-lg"
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-3 text-lg"
            >
              <FiMail className="mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/levi1775"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-pimple-523a65228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:vedantpimple1775@gmail.com"
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
