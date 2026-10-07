import kibumarket from "../assets/projects/kibumarket.png";
import borefashionhub from "../assets/projects/borefashionhub.png";
import hostelconnect from "../assets/projects/hostelconnect.png";
import portfolioImg from '../assets/projects/personal_portfolio.png';
import pointOfSale from '../assets/projects/pointOfSale.png'
export const projectTags = ['All', 'AI','FullStack', 'Backend', 'Python'];

// Local configurations matching Gilbert's actual GitHub repos
export const projectsConfig = [
  {
    id: 1,
    repoName: 'Kibu-market',
    image: kibumarket,
    live: 'https://kibu-market-ten.vercel.app/',
    tags: ['FullStack'],
    fallback: {
      title: 'Kibu Market',
      description: 'Fall back A dynamic e-commerce web platform for university students to buy and sell goods and services within the campus.',
      tech: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
      github: 'https://github.com/Gilbert-Baraza/Kibu-market'
    }
  },
  {
    id: 2,
    repoName: 'Wine_Spirits_POS',
    image: pointOfSale,
    live: 'https://wine-spirits-pos.onrender.com/',
    tags: ['FullStack', 'Python'],
    fallback: {
      title: 'Point Of Sale System(POS)',
      description: 'A production-grade, centralized web-based Point of Sale (POS) and Business Management System tailored for retail wine and spirits businesses operating across multiple shop branches.',
      tech: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
      github: 'https://github.com/Gilbert-Baraza/Wine_Spirits_POS'
    }
  },
  {
    id: 6,
    repoName: 'job_board',
    image: portfolioImg,
    live: 'https://github.com/Gilbert-Baraza/job_board',
    tags: ['Backend'],
    fallback: {
      title: 'Job Board',
      description: 'A production-grade, centralized web-based Point of Sale (POS) and Business Management System tailored for retail wine and spirits businesses operating across multiple shop branches.',
      tech: ['JavaScript','Express', 'PostgreSQL','TypeScript'],
      github: 'https://github.com/Gilbert-Baraza/job_board'
    }
  },
  {
    id: 3,
    repoName: 'House-Of-Bore',
    image: borefashionhub,
    live: 'https://house-of-bore.vercel.app',
    tags: ['FullStack','Python'],
    fallback: {
      title: 'House Of Bore',
      description: 'A local rental management dashboard designed for landlords and property management systems.',
      tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/Gilbert-Baraza/House-Of-Bore'
    }
  },
  {
    id: 4,
    repoName: 'Hostels-Connect',
    image: hostelconnect,
    live: 'https://hostel-connect.vercel.app',
    tags: ['FullStack'],
    fallback: {
      title: 'Hostels Connect',
      description: 'A hostel search, comparison, and booking platform mapping student housing facilities near universities.',
      tech: ['JavaScript', 'React', 'CSS', 'Firebase'],
      github: 'https://github.com/Gilbert-Baraza/Hostels-Connect'
    }
  },
  {
    id: 5,
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

