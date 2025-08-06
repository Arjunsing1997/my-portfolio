import React from 'react';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import Button from '../ui/Button';
import profilePicture from '../../assets/images/arjun.jpg'

const Hero: React.FC = () => {
    const typedText = useTypingAnimation([
        'Full-Stack Developer',
        'Mobile App Creator',
        'UI/UX Enthusiast',
        'Problem Solver'
    ]);

    const handleDownloadResume = () => {
        // Handle resume download logic
        console.log('Downloading resume...');
        const link = document.createElement('a');
        link.href = "../../../public/Arjunsing - Resume.pdf"; // path inside public folder
        link.download = 'Arjunsing - Resume.pdf'; // name for the downloaded file
        link.click();
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="space-y-8 animate-fade-in">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                Hi, I'm <span className="text-gradient">Arjunsing Rajaput</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                                Full-Stack & App Developer
                            </h2>
                            <div className="text-xl md:text-2xl text-primary-600 font-medium h-8">
                                <span className="typing-cursor">{typedText}</span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 max-w-lg">
                            Dynamic Full Stack Developer with 4+ years of experience building and deploying robust,
                            user-centric solutions. Skilled in bridging frontend and backend development to create seamless
                            and high-performance applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button onClick={scrollToProjects}>
                                View Projects
                            </Button>
                            <Button variant="outline" icon={Download} onClick={handleDownloadResume}>
                                Download Resume
                            </Button>
                        </div>

                        <div className="flex space-x-6">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary-600 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/Arjunsing1997"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary-600 transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://x.com/Arjunsing_97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary-600 transition-colors"
                            >
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center lg:justify-end animate-float">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src={profilePicture}
                                        alt="Profile Picture"
                                        className="w-full h-full object-cover object-center rounded-full border-4 border-gray-300 dark:border-gray-600"
                                    />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce-slow"></div>
                            <div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-bounce-slow"
                                style={{ animationDelay: '1s' }}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;