"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FiDownload, FiEye, FiBook, FiBriefcase, FiAward } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log("Resume section is in view");
    }
  }, [inView]);

  const education = [
    {
      degree: 'B.Tech in Metallurgical Engineering and Materials Science',
      institution: 'Indian Institute of Technology (IIT) Indore',
      period: '2021 - 2025',
      status: 'Final Year',
    }
  ];

  const experience = [
    {
      role: 'ML Research Intern',
      company: 'AI Research Lab',
      period: 'Summer 2024',
      description: 'Developed computer vision models for MRI image classification and reconstruction using Vision Transformers, achieving state-of-the-art results surpassing previous benchmarks of CNN Models.',
    },
    {
      role: 'Backend Developer',
      company: 'Tech Startup',
      period: 'Winter 2023',
      description: 'Built scalable APIs and database architectures for web applications, focusing on performance optimization.',
    }
  ];

  const achievements = [
    'Achieved 98.42% accuracy in plant disease classification project',
    'Built multiple end-to-end ML applications with real-world impact',
    'Strong foundation in both theoretical and practical aspects of AI/ML',
    'Active contributor to open-source projects in machine learning',
  ];

  return (
    <section id="resume" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My academic background, professional experience, and key achievements
            </p>
          </div>

          {/* Download Resume Section */}
          <div className="text-center mb-16">
            <div className="gradient-border inline-block">
              <div className="gradient-border-content bg-[#0a192f]">
                <h3 className="text-2xl font-semibold text-white mb-4">Download My Resume</h3>
                <p className="text-gray-300 mb-6">
                  Get the complete overview of my skills, experience, and projects
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/resume.pdf"
                    download
                    className="bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center justify-center px-4 py-2 rounded"
                  >
                    <FiDownload className="mr-2" />
                    Download PDF
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white flex items-center justify-center px-4 py-2 rounded"
                  >
                    <FiEye className="mr-2" />
                    Preview Online
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#172a45]">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FiBook className="mr-3 text-[#3b82f6]" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-[#3b82f6] font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{edu.period}</span>
                      <span className="text-xs bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded-full">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#172a45]">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FiBriefcase className="mr-3 text-[#3b82f6]" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-[#3b82f6] font-medium">{exp.company}</p>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#172a45]">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FiAward className="mr-3 text-[#3b82f6]" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Summary */}
          <div className="mt-16">
            <Card className="bg-[#172a45]">
              <CardHeader>
                <CardTitle className="text-center text-white">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { category: 'Programming', skills: ['Python', 'JavaScript', 'TypeScript', 'C++'] },
                    { category: 'ML/AI', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'] },
                    { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
                    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Linux'] },
                  ].map((skillGroup, index) => (
                    <div key={index} className="text-center">
                      <h4 className="font-semibold text-white mb-3">{skillGroup.category}</h4>
                      <div className="space-y-2">
                        {skillGroup.skills.map((skill) => (
                          <div key={skill} className="text-sm text-gray-400">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;