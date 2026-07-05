import kibumarket from "../assets/projects/kibumarket.png";
import borefashionhub from "../assets/projects/borefashionhub.png";
import hostelconnect from "../assets/projects/hostelconnect.png";
import portfolioImg from '../assets/projects/personal_portfolio.png';

export const projectTags = ['All', 'AI', 'Backend', 'Web', 'Python'];

// Local configurations matching Gilbert's actual GitHub repos
export const projectsConfig = [
  {
    id: 1,
    repoName: 'Kibu-market',
    image: kibumarket,
    live: 'https://kibu-market-ten.vercel.app/',
    tags: ['Backend', 'Web', 'Python'],
    fallback: {
      title: 'Kibu Market',
      description: 'A dynamic e-commerce web platform for university students to buy and sell goods and services within the campus.',
      tech: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
      github: 'https://github.com/Gilbert-Baraza/Kibu-market'
    }
  },
  {
    id: 2,
    repoName: 'House-Of-Bore',
    image: borefashionhub,
    live: 'https://house-of-bore.vercel.app',
    tags: ['Backend', 'Web', 'Python'],
    fallback: {
      title: 'House Of Bore',
      description: 'A local rental management dashboard designed for landlords and property management systems.',
      tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/Gilbert-Baraza/House-Of-Bore'
    }
  },
  {
    id: 3,
    repoName: 'Hostels-Connect',
    image: hostelconnect,
    live: 'https://hostel-connect.vercel.app',
    tags: ['Web'],
    fallback: {
      title: 'Hostels Connect',
      description: 'A hostel search, comparison, and booking platform mapping student housing facilities near universities.',
      tech: ['JavaScript', 'React', 'CSS', 'Firebase'],
      github: 'https://github.com/Gilbert-Baraza/Hostels-Connect'
    }
  },
  {
    id: 4,
    repoName: 'mental-health-risk-predictor',
    image: portfolioImg,
    live: 'https://mental-health-risk.vercel.app',
    tags: ['AI', 'Python'],
    fallback: {
      title: 'Mental Health Risk Predictor',
      description: 'An AI-powered tool that assesses mental health risk levels using machine learning models trained on clinical datasets.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      github: 'https://github.com/Gilbert-Baraza/mental-health-risk-predictor'
    }
  }
];

