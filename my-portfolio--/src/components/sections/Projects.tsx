import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import lostfound from '../../assets/images/lostandfound.jpg'
import bank from '../../assets/images/banking.jpg'
import restaurant from '../../assets/images/restaurant.jpg'
import keep from '../../assets/images/keep.jpg'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Lost & Found Web App',
      description: 'Developed a responsive, full-stack Lost and Found application with user authentication',
      image: lostfound,
      category: 'full-stack',
      technologies: ['React', 'Tailwind', 'Express', 'Node.js', 'MongoDB'],
    },
    {
      id: '2',
      title: 'Banking App',
      description: 'Developed a secure banking mobile app, account management, and AI chat Bot using Android Studio Kotlin and Firebase.',
      image: bank,
      category: 'mobile',
      technologies: ['Android Studio', 'Kotlin', 'Firebase'],
    },
    {
      id: '3',
      title: 'Restaurant Booking System',
      description: 'Built a responsive restaurant web app with online food ordering, table reservations, and dynamic menu management',
      image: restaurant,
      category: 'web',
      technologies: ['HTML/CSS', 'Boostrap CSS', 'MySQL'],
    },
    {
      id: '4',
      title: 'Fundoo app (like Google Keep)',
      description: 'Created a note-taking app similar to Google Keep with features like labels, reminders',
      image: keep,
      category: 'full-stack',
      technologies: ['Angular Js', 'Boostrap CSS', 'MSSQL'],
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'full-stack', label: 'Full-Stack' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some of my recent work and achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter.key
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover className="group overflow-hidden">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg p-12 text-center">
                  <div className="text-6xl flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img className="w-20 max-w-md h-auto object-cover rounded-lg shadow-md" src={project.image} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm" className="bg-white text-primary-600 hover:bg-gray-100">
                    <ExternalLink size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white text-primary-600 hover:bg-gray-100">
                    <Github size={16} />
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;