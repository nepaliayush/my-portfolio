import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Talent Connects',
    position: 'Software Engineer Intern',
    duration: 'March 2024 - June 2024',
  },
  {
    company: 'Shakya Architects',
    position: 'Freelance Fullstack Developer',
    duration: 'June 2023 - November 2023',
  },
  {
    company: 'Ayub LLC',
    position: 'Web Content Writer',
    duration: 'December 2022 - May 2023',
  },
];

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-2 mt-5 space-y-10">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-between mb-4 pb-4 border-b border-slate-900 last:border-b-0">
          <div>
            <p className="text-lg md:text-xl font-semibold">{exp.company}</p>
            <p className="text-base md:text-lg text-gray-600">{exp.position}</p>
          </div>
          <p className="text-base md:text-lg text-gray-500 mt-1 sm:mt-0">{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;