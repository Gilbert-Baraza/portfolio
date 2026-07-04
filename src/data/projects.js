// Project images will be imported here
import agriguardImg from '../assets/projects/agriguard_ai.png';
import adaaImg from '../assets/projects/adaa_ai_planner.png';
import studentImg from '../assets/projects/student_management_system.png';
import portfolioImg from '../assets/projects/personal_portfolio.png';

export const projectTags = ['All', 'AI', 'Backend', 'Web', 'Python'];

export const projectsData = [
  {
    id: 1,
    title: 'AgriGuard AI',
    description: 'An AI-powered agriculture assistant designed to detect crop diseases from image uploads and provide optimal farming recommendations, including treatment schedules and weather advice.',
    tech: ['Django', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    tags: ['AI', 'Backend', 'Python', 'Web'],
    image: agriguardImg,
    github: 'https://github.com/GilbertBaraza/AgriGuard-AI',
    live: 'https://agriguard-ai.vercel.app'
  },
  {
    id: 2,
    title: 'Adaa AI Planner',
    description: 'An intelligent planning system that captures user requirements through prompts and automatically generates organized, step-by-step technical implementation plans, tasks, and system diagrams.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'OpenAI API', 'Vite'],
    tags: ['AI', 'Web'],
    image: adaaImg,
    github: 'https://github.com/GilbertBaraza/Adaa-AI-Planner',
    live: 'https://adaa-ai-planner.vercel.app'
  },
  {
    id: 3,
    title: 'Student Management System',
    description: 'A comprehensive database management application that handles administrative student records, registrations, course details, grades, attendance tracking, and report generations.',
    tech: ['Django', 'SQLite', 'Bootstrap', 'HTML5', 'CSS3'],
    tags: ['Backend', 'Python', 'Web'],
    image: studentImg,
    github: 'https://github.com/GilbertBaraza/Student-Management-System',
    live: 'https://student-sys.vercel.app'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'Gilbert Baraza\'s personal portfolio website itself. Built with modern visual aesthetics, dark/light mode toggle, dynamic scroll animations, custom GitHub API integration, and an EmailJS-powered contact portal.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    tags: ['Web'],
    image: portfolioImg,
    github: 'https://github.com/GilbertBaraza/portfolio',
    live: 'https://gilbert-baraza.vercel.app'
  }
];
