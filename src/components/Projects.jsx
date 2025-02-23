import React from 'react';

const projects = [
  {
    name: 'ShivaTrades (Stock Trading Platform)',
    date: 'Aug 2024',
    description:
      'A full-stack stock trading platform simulating stock purchasing, portfolio management, and order tracking.',
    technologies: 'React.js, Node.js, Express, MongoDB',
    github: 'https://github.com/ShivangSaxena05/Zerodha-Clone',
  },
  {
    name: 'MyTodo App',
    date: 'Aug 2024',
    description:
      'A web-based task management application with features to add, edit, delete, and mark tasks complete.',
    technologies: 'React.js, Tailwind CSS',
    github: 'https://github.com/ShivangSaxena05/My-Todo',
  },
  {
    name: 'Mishthy Yog Sadhna',
    date: 'Jul 2024',
    description:
      'A responsive website for a yoga institute built using WIX, featuring multiple pages and user interactions.',
    technologies: 'WIX',
    github: '#',
  },
  {
    name: 'Spotify Clone',
    date: 'Nov 2023',
    description:
      'A Spotify-like music player web app with song navigation, play/pause functionality, and a responsive UI.',
    technologies: 'HTML, CSS, JavaScript',
    github: 'https://github.com/ShivangSaxena05/Spotify_Clone',
  },
  {
    name: 'Simple Calculator',
    date: '2023',
    description:
      'A working calculator built using HTML, CSS, and JavaScript.',
    technologies: 'HTML, CSS, JavaScript',
    github: '#',
  },
  {
    name: 'Official Portfolio',
    date: '2024',
    description:
      'A dynamic portfolio built with Vite, React, and Tailwind CSS, showcasing personal projects and skills.',
    technologies: 'Vite, React, Tailwind CSS',
    github: '#',
  },
  {
    name: 'Netflix Clone Frontend',
    date: '2023',
    description:
      'A frontend clone of Netflix created using HTML and CSS, demonstrating layout and design skills.',
    technologies: 'HTML, CSS',
    github: '#',
  },
];

const Projects = () => {
  return (
    <div id="content" className="min-h-screen bg-black text-white mt-20 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-300">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-200">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{project.date}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Tech Stack:</strong> {project.technologies}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
