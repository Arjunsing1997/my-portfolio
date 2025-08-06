import React, { useEffect, useRef } from 'react';
import { Stats } from '@/types';

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = React.useState<Stats>({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });

  const finalStats: Stats = {
    experience: 4,
    projects: 5,
    clients: 3,
    satisfaction: 95
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        experience: Math.round(finalStats.experience * progress),
        projects: Math.round(finalStats.projects * progress),
        clients: Math.round(finalStats.clients * progress),
        satisfaction: Math.round(finalStats.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepDuration);
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full-Stack and App Developer with over 5 years of experience creating innovative digital solutions. I specialize in building scalable web applications and mobile apps that solve real-world problems.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating user-centered designs that deliver exceptional experiences.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl text-primary-600 mb-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Always Learning
                  </h3>
                  <p className="text-gray-600">
                    Staying updated with the latest technologies and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stats.experience}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stats.projects}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;