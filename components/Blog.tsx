"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'Understanding CNNs: From Theory to Practice',
      excerpt: 'A comprehensive guide to Convolutional Neural Networks, covering the mathematical foundations and practical implementation for computer vision tasks.',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Machine Learning', 'Deep Learning', 'CNN'],
      image: '/api/placeholder/300/200',
    },
    {
      title: 'Building Scalable ML Pipelines with Python',
      excerpt: 'Learn how to create robust, scalable machine learning pipelines that can handle production workloads and maintain model performance over time.',
      date: '2024-02-28',
      readTime: '12 min read',
      tags: ['MLOps', 'Python', 'Pipeline'],
      image: '/api/placeholder/300/200',
    },
    {
      title: 'Materials Science Meets AI: Future Possibilities',
      excerpt: 'Exploring the intersection of materials science and artificial intelligence, and how AI can revolutionize materials discovery and development.',
      date: '2024-02-10',
      readTime: '6 min read',
      tags: ['Materials Science', 'AI', 'Research'],
      image: '/api/placeholder/300/200',
    },
    {
      title: 'Time Series Forecasting with LSTM Networks',
      excerpt: 'A practical tutorial on implementing LSTM networks for time series prediction, with real-world examples and best practices.',
      date: '2024-01-22',
      readTime: '10 min read',
      tags: ['LSTM', 'Time Series', 'TensorFlow'],
      image: '/api/placeholder/300/200',
    },
  ];

  useEffect(() => {
    if (inView) {
      console.log("Blog section is in view");
    }
  }, [inView]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Blog & Insights</h2>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Sharing my thoughts on AI, machine learning, and the intersection of technology with materials science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer bg-[#172a45]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" size={14} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#3b82f6] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-[#3b82f6]/10 text-[#3b82f6] hover:bg-[#3b82f6]/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-[#3b82f6] hover:text-[#2563eb] group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <FiArrowRight className="ml-2" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white">
              View All Posts
            </Button>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="gradient-border inline-block">
              <div className="gradient-border-content bg-[#0a192f]">
                <h3 className="text-2xl font-semibold text-white mb-4">Subscribe for Updates</h3>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                  Get notified when I publish new articles about AI, ML, and technology insights
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-[#1e3a8a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] bg-[#0a192f] text-white"
                  />
                  <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
