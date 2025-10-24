import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const heroData = {
  name: "Nama Anda",
  title: "Front-End Developer Minimalis & Fungsional",
  bio: "Membangun antarmuka web yang bersih, responsif, dan performa tinggi menggunakan ReactJS.",
  ctaText: "Lihat Proyek Saya",
  ctaLink: "#projects",
};

export const skillsData = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "HTML5", icon: FaHtml5, color: "text-red-500" },
  { name: "CSS3/Tailwind", icon: FaCss3Alt, color: "text-blue-700" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "UI/UX Design", icon: FaFigma, color: "text-purple-600" },
];

export const projectsData = [
  {
    id: 1,
    title: "Minimalist E-Commerce Platform",
    description:
      "Platform e-commerce dengan fokus pada user experience yang bersih dan proses checkout yang cepat.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    demoLink: "https://demo.link",
    repoLink: "https://github.com/repo-link",
    // Ganti dengan URL gambar proyek Anda
    image: "https://via.placeholder.com/600x400?text=Project+1",
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description:
      "Dashboard untuk melacak pengeluaran harian dan bulanan dengan visualisasi data yang intuitif.",
    techStack: ["Next.js", "Chakra UI", "MongoDB"],
    demoLink: "https://demo.link",
    repoLink: "https://github.com/repo-link",
    image: "https://via.placeholder.com/600x400?text=Project+2",
  },
];
