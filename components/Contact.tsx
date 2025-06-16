"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';
import { toast } from 'sonner';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (inView) {
      console.log("Contact section is in view");
    }
  }, [inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(apiUrl as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else if (data.errors) {
        toast.error(data.errors.map((err: any) => err.msg).join(', '));
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'vedantpimple1775@gmail.com',
      link: 'mailto:vedantpimple1775@gmail.com',
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/vedantpimple',
      link: 'https://www.linkedin.com/in/vedant-pimple-523a65228/',
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'github.com/vedantpimple',
      link: 'https://github.com/levi1775',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Indore, Madhya Pradesh, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate on research,
                  or simply want to discuss the latest in AI and machine learning,
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
                        <Icon className="text-[#3b82f6]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#3b82f6] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="font-medium text-white mb-4">Quick Links</h4>
                <div className="flex space-x-4">
                  {contactInfo.slice(0, 3).map((info, index) => {
                    const Icon = info.icon;
                    return info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#3b82f6]/10 rounded-full flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-xl transition-shadow duration-300 bg-[#172a45]">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="focus:ring-[#3b82f6] bg-[#0a192f] border-[#1e3a8a] text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="focus:ring-[#3b82f6] bg-[#0a192f] border-[#1e3a8a] text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="focus:ring-[#3b82f6] bg-[#0a192f] border-[#1e3a8a] text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        required
                        className="focus:ring-[#3b82f6] bg-[#0a192f] border-[#1e3a8a] text-white resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;