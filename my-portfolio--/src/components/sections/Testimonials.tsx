import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '@/types';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'Alex delivered an outstanding web application that exceeded our expectations. Professional, reliable, and technically excellent.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      company: 'Digital Solutions',
      content: 'The mobile app Alex developed has been a game-changer for our business. Great communication throughout the project.',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Johnson',
      company: 'StartupXYZ',
      content: 'Working with Alex was a pleasure. The full-stack solution was delivered on time and within budget.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-primary-600">
                  {testimonials[activeIndex].company}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-primary-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-primary-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;