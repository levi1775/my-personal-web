"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { FiCode, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: FiCpu, title: 'Machine Learning', desc: 'Deep learning, neural networks, computer vision' },
    { icon: FiCode, title: 'Backend Development', desc: 'Python, Node.js, API development' },
    { icon: FiDatabase, title: 'Data Science', desc: 'Data analysis, visualization, statistical modeling' },
    { icon: FiTrendingUp, title: 'Research', desc: 'Materials science, metallurgy, innovation' },
  ];

  useEffect(() => {
    if (inView) {
      console.log("About section is in view");
    }
  }, [inView]);

  return (
    <section id="about" className="py-20 bg-[#0a192f]"> {/* Changed to navy blue */}
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2> {/* Changed to white */}
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto"></div> {/* Changed to bright blue */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed"> {/* Changed to light gray */}
                I'm a final-year B.Tech student at <span className="text-[#3b82f6] font-semibold">IIT Indore</span>,
                specializing in Metallurgical Engineering and Materials Science.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey from materials science to AI/ML reflects my belief that <span className="text-[#3b82f6] font-semibold">innovation happens at the intersection of disciplines</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about creating intelligent systems that can make a real-world impact.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Python', 'Machine Learning', 'Deep Learning', 'Node.js', 'React', 'MongoDB', 'TensorFlow', 'PyTorch'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#172a45]"> {/* Dark blue card */}
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b82f6]/20 transition-colors">
                        <Icon className="text-[#3b82f6]" size={24} /> {/* Bright blue icon */}
                      </div>
                      <h3 className="font-semibold text-white mb-2">{skill.title}</h3> {/* White text */}
                      <p className="text-sm text-gray-400">{skill.desc}</p> {/* Light gray text */}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
