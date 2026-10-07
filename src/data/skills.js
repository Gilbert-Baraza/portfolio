import { 
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaReact, 
  FaBootstrap, FaGitAlt, FaGithub, FaLinux, FaDocker, 
  FaUsers, FaLightbulb, FaBrain, FaComments, FaJava, FaNodeJs
} from 'react-icons/fa';
import { 
  SiDjango, SiTailwindcss, SiPostgresql, SiSqlite, SiC, SiCplusplus, SiFastapi, SiMysql, SiMongodb, SiExpress
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { TbApi } from 'react-icons/tb';

export const skillCategories = [
  { id: 'languages', name: 'Programming Languages' },
  { id: 'frameworks', name: 'Frameworks' },
  { id: 'databases', name: 'Databases' },
  { id: 'tools', name: 'Tools' },
  { id: 'networking', name: 'Networking & APIs' },
  { id: 'soft-skills', name: 'Soft Skills' }
];

export const skillsData = {
  languages: [
    { name: 'Python', icon: FaPython, level: 90, color: 'text-[#3776AB]' },
    { name: 'JavaScript', icon: FaJs, level: 90, color: 'text-[#F7DF1E]' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-[#1572B6]' },
    { name: 'Java', icon: FaJava, level: 60, color: 'text-[#E01E22]' },
    { name: 'C', icon: SiC, level: 50, color: 'text-[#A8B9CC]' },
    { name: 'C++', icon: SiCplusplus, level: 50, color: 'text-[#00599C]' },
    { name: 'SQL', icon: FaDatabase, level: 85, color: 'text-[#4479A1]' }
  ],
  frameworks: [
    { name: 'Express', icon: SiExpress, level: 80, color: 'text-[#000000] dark:text-white' },
    { name: 'Django', icon: SiDjango, level: 75, color: 'text-[#092E20]' },
    { name: 'React', icon: FaReact, level: 70, color: 'text-[#61DAFB]' },
    { name: 'Node.js', icon: FaNodeJs, level: 70, color: 'text-[#339933]' },
    
    { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: 'text-[#7952B3]' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: 'text-[#4169E1]' },
    { name: 'MySQL', icon: SiMysql, level: 80, color: 'text-[#4479A1]' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'text-[#47A248]' },
    { name: 'SQLite', icon: SiSqlite, level: 80, color: 'text-[#003B57]' }
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, level: 85, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: FaGithub, level: 90, color: 'text-[#181717] dark:text-white' },
    { name: 'Linux', icon: FaLinux, level: 60, color: 'text-[#FCC624]' },
    { name: 'VS Code', icon: DiVisualstudio, level: 92, color: 'text-[#007ACC]' }
  ],
  networking: [
    { name: 'Docker', icon: FaDocker, level: 60, color: 'text-[#2496ED]' },
    { name: 'FastAPI', icon: SiFastapi, level: 66, color: 'text-[#009688]' }
  ],
  'soft-skills': [
    { name: 'Communication', icon: FaComments, level: 90, color: 'text-[#38BDF8]' },
    { name: 'Problem Solving', icon: FaLightbulb, level: 90, color: 'text-[#F59E0B]' },
    { name: 'Teamwork', icon: FaUsers, level: 92, color: 'text-[#10B981]' },
    { name: 'Critical Thinking', icon: FaBrain, level: 85, color: 'text-[#EC4899]' }
  ]
};
