import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/bg.gif';

const skills = [
  { category: 'Web Development', skills: [
      { name: 'HTML, CSS, JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'WordPress, Wix', level: 70 }
    ]
  },
  { category: 'MERN Stack', skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 65 }
    ]
  },
  { category: 'Programming Languages', skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 60 }
    ]
  },
  { category: 'Tools & Platforms', skills: [
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 }
    ]
  }
];

const Skills = () => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      const levels = {};
      skills.forEach(group => {
        group.skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
      });
      setAnimatedLevels(levels);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="content" className='relative min-h-screen text-white p-8 flex flex-col items-center justify-center' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
      
      <h1 className='text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg'>Skills</h1>
      <div className='space-y-10 w-full max-w-3xl'>
        {skills.map((group, index) => (
          <div key={index}>
            <h2 className='text-2xl font-semibold mb-4 text-yellow-400'>{group.category}</h2>
            <div className='space-y-6'>
              {group.skills.map((skill, i) => (
                <div key={i} className='relative flex items-center space-x-4'>
                  {/* Custom Shape for Skill Name */}
                  <div className='bg-gray-800 px-6 py-2 rounded-full shadow-md text-white font-semibold min-w-[200px] text-center flex items-center justify-center'>
                    {skill.name}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className='w-full bg-gray-700 h-4 rounded-full overflow-hidden relative group shadow-md'>
                    <div
                      className='bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-[2s] ease-out rounded-full'
                      style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                    ></div>
                    
                    {/* Circular Tip */}
                    <div
                      className='absolute w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg 
                      transition-transform duration-300 transform translate-x-1/2 group-hover:scale-110'
                      style={{
                        left: `${animatedLevels[skill.name] || 0}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
