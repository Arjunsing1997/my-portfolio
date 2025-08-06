import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '@/types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);


    emailjs
      .send(
        'service_e51j1ng', // e.g., service_xxx
        'template_348vi6e', // e.g., template_yyy
        formData as any,
        'VtLT27sSfp6Gky23S'   // e.g., Bnxxx_abc
      )
      .then(() => {

        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });



    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arjunrajputh09@gmail.com',
      href: 'mailto:arjunrajputh09@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6360541082',
      href: 'tel:+91 6360541082'
    },
    {
      icon: MapPin,
      title: 'Bengaluru',
      value: 'Karnataka, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Let's start a conversation
              </h3>
              <p className="text-gray-600">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're looking to build something from scratch or improve an existing system,
                I'd love to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="fullstack">Full-Stack Solution</option>
                  <option value="design">UI/UX Design</option>
                  <option value="hire">Hire Me</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                icon={Send}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;