import React from 'react';
import { Service } from '@/types';
import Card from '../ui/Card';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      icon: '💻',
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks and best practices'
    },
    {
      id: '2',
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android'
    },
    {
      id: '3',
      icon: '🔧',
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from database to user interface'
    },
    {
      id: '4',
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design for optimal user experience'
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            What I offer to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} hover className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;