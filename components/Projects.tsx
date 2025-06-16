"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'PLANT-AI',
      description: 'Advanced CNN-based model for plant disease classification achieving 98.42% accuracy. Implements state-of-the-art computer vision techniques for agricultural applications.',
      image: 'https://bitrefine.group/images/1920x870/damaged_leaves_1920x870.jpg', // Updated image path
      tags: ['Python', 'TensorFlow', 'CNN', 'Computer Vision', 'Agriculture'],
      github: 'https://github.com/levi1775/Plant-disease-detection-',
      demo: 'https://plant-ai-demo.vercel.app',
      accuracy: '98.42%',
    },
    {
      title: 'ResumeInsight2',
      description: 'Intelligent ML system for parsing resumes and providing job match recommendations. Features NLP techniques and similarity algorithms for career guidance.',
      image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/74615a04-0788-4de3-92ad-ef03623c59d5.png', // Updated image path
      tags: ['Python', 'NLP', 'Machine Learning', 'Flask', 'Scikit-learn'],
      github: 'https://github.com/levi1775/ResumeInsight',
      demo: 'https://resumeinsight2.herokuapp.com',
    },
    {
      title: 'Google Stock Prediction',
      description: 'Time series forecasting model using LSTM networks to predict Google stock prices. Implements advanced deep learning techniques for financial analysis.',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*NpT5pyemQQsGEHXbfS51Zw.png', // Updated image path
      tags: ['Python', 'LSTM', 'Time Series', 'TensorFlow', 'Financial Analysis'],
      github: 'https://github.com/levi1775/google-stock-price-prediction',
      demo: 'https://stock-predictor-demo.vercel.app',
    },
    {
      title: 'Spam Detector',
      description: 'Machine learning model for binary classification of spam messages. Utilizes feature engineering and multiple ML algorithms for high accuracy detection.',
      image: 'https://www.medianama.com/wp-content/uploads/2019/12/spam-940521_1920.jpg.jpg', // Updated image path
      tags: ['Python', 'NLP', 'Classification', 'Scikit-learn', 'Feature Engineering'],
      github: 'https://github.com/levi1775/Spam-email-sms-classifier',
      demo: 'https://spam-detector-demo.vercel.app',
    },
  ];

  useEffect(() => {
    if (inView) {
      console.log("Projects section is in view");
    }
  }, [inView]);

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my work in machine learning, data science, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#172a45]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="text-white bg-[#3b82f6]/20 hover:bg-[#3b82f6]/30">
                        <FiEye className="mr-1" size={14} />
                        Preview
                      </Button>
                    </div>
                  </div>
                  {project.accuracy && (
                    <Badge className="absolute top-4 right-4 bg-[#10b981] hover:bg-[#059669]">
                      {project.accuracy} Accuracy
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-[#3b82f6]/10 text-[#3b82f6] hover:bg-[#3b82f6]/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button size="sm" variant="outline" className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub className="mr-2" size={14} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="mr-2" size={14} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white" asChild>
              <a href="https://github.com/levi1775?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FiGithub className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
