import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MSSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Android Studio', 'Kotlin', 'Firebase']
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'git-Hub', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full hover:bg-primary-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;