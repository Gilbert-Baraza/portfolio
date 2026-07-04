import agriguardImg from '../assets/projects/agriguard_ai.png';
import kibumarket from "../assets/projects/kibumarket.png";
import borefashionhub from "../assets/projects/borefashionhub.png";
import hostelconnect from "../assets/projects/hostelconnect.png";
import adaaImg from '../assets/projects/adaa_ai_planner.png';
import studentImg from '../assets/projects/student_management_system.png';
import portfolioImg from '../assets/projects/personal_portfolio.png';

export const projectTags = ['All', 'AI', 'Backend', 'Web', 'Python'];

// Local configurations matching Gilbert's actual GitHub repos
export const projectsConfig = [
  {
    id: 1,
    repoName: 'Kibu-market',
    image: kibumarket,
    live: 'https://kibu-market-ten.vercel.app/',
    tags: ['Backend', 'Web', 'Python']
  },
  {
    id: 2,
    repoName: 'House-Of-Bore',
    image: borefashionhub,
    live: 'https://house-of-bore.vercel.app',
    tags: ['Backend', 'Web', 'Python']
  },
  {
    id: 3,
    repoName: 'Hostel-Connect',
    image: hostelconnect,
    live: 'https://hostel-connect.vercel.app',
    tags: ['Web']
  },
  {
    id: 4,
    repoName: 'mental-health-risk-predictor',
    image: portfolioImg,
    live: 'https://mental-health-risk.vercel.app',
    tags: ['AI', 'Python']
  }
];

// Fallback data mapping Gilbert's actual GitHub repos
export const fallbackProjectsData = [
  {
    id: 1,
    title: 'Kibu Market',
    description: 'A dynamic e-commerce web platform developed for Kibabii University students to buy, sell, and trade goods and services within the campus community.',
    tech: ['Django', 'Python', 'SQLite', 'Tailwind CSS'],
    tags: ['Backend', 'Web', 'Python'],
    image: agriguardImg,
    github: 'https://github.com/Gilbert-Baraza/Kibu-market',
    live: 'https://kibu-market-nh6r.vercel.app/'
  },
  {
    id: 2,
    title: 'House Of Bore',
    description: 'A comprehensive rental listings and housing management system designed to connect landlords and property agents with students seeking accommodation.',
    tech: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS'],
    tags: ['Backend', 'Web', 'Python'],
    image: adaaImg,
    github: 'https://github.com/Gilbert-Baraza/House-Of-Bore',
    live: 'https://house-of-bore.vercel.app'
  },
  {
    id: 3,
    title: 'Hostel Connect',
    description: 'An interactive booking system allowing university students to search, view details of, compare, and lease hostel rooms directly on campus.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    tags: ['Web'],
    image: studentImg,
    github: 'https://github.com/Gilbert-Baraza/Hostel-Connect',
    live: 'https://hostel-connect.vercel.app'
  },
  {
    id: 4,
    title: 'Mental Health Risk Predictor',
    description: 'A data science and machine learning dashboard utilizing risk factor datasets to predict mental health risk levels and present predictive metrics.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn'],
    tags: ['AI', 'Python'],
    image: portfolioImg,
    github: 'https://github.com/Gilbert-Baraza/mental-health-risk-predictor',
    live: 'https://mental-health-risk.vercel.app'
  }
];
