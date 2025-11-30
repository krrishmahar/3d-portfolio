import {
  pytorch,
  devops,
  gaming,
  bookquill,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  kubernetes,
  aws,
  terraform,
  jenkins,
  linux,
  java,
  python,
  golang,
  git,
  docker,
  veda_app,
  ministats,
  labsphere,
  labsphere_icon,
  csi_logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: devops,
  },
  {
    title: "ML Engineer",
    icon: pytorch,
  },
  {
    title: "Casual Gamer",
    icon: gaming,
  },
  {
    title: "Content Writer",
    icon: bookquill,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Joint Design Head",
    company_name: "CSI - Computer Society of India",
    icon: csi_logo,
    iconBg: "#383E56",
    date: "Aug 2025 - Nov 2025",
    points: [
      "Designed event posters, banners, and digital assets for CSI activities.",
      "Collaborated with the tech and content teams to maintain consistent branding.",
      "Helped improve design workflows and shared design resources with the team.",
      "Contributed to UI/UX ideas for club projects and student initiatives.",
    ],
  },
  {
    title: "Chief Technology Officer",
    company_name: "LabSphere",
    icon: labsphere_icon,
    iconBg: "#E6DEDD",
    date: "July 2025 - Current",
    points: [
      "Building and maintaining the LabSphere platform using Next.js, TypeScript, and Supabase.",
      "Developing role-based signup flows for labs, and patients with Twilio OTP and secure data handling.",
      "Managing backend models with Prisma and PostgreSQL to support user onboarding and document uploads.",
      "Working with designers and team members to refine UI/UX and improve platform reliability.",
      "Handling deployments, CI/CD, and basic DevOps tasks to keep the application stable and up to date.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was good learning experience and growth with working with him.",
    name: "Siddharth Gupta",
    designation: "COO",
    company: "LabSphere",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFs1pNXznIDmg/profile-displayphoto-shrink_400_400/B4DZXBOkcMHAAg-/0/1742703577747?e=1766016000&v=beta&t=hr_0y1ey11-DUlBB_YyPG-O51CJWT13ZRJkh-YjusT4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Krrish does.",
    name: "Sajal Patra",
    designation: "CEO",
    company: "LabSphere",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQF68H2je_rO6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689248708054?e=1766016000&v=beta&t=XluwGjIQjS33EX5YHJB3KX1UX8NXyBjpFVxAkM_m860",
  },
  {
    testimonial:
      "Having Krrish on our team was a game-changer. His expertise brought our events to life with efficiency and innovation.",
    name: "Manas Amare",
    designation: "Secreatary",
    company: "CESA-CSI",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFPvXyPYGKCIQ/profile-displayphoto-crop_800_800/B56Zja9KvJHUAI-/0/1756020126890?e=1766016000&v=beta&t=JN90sh_KZ9BiOpb3DTypCyXEHt2kIweJyQyknRwjlYI",
  },
];

const projects = [
  {
    name: "Hotel Booking Platform",
    description:
      "Web-based platform that allows users to search, book hotel and decide their stay, providing a convenient and efficient solution for accommodation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: veda_app,
    source_code_link: "https://github.com/krrishmahar/veda-app",
  },
  {
    name: "MINISTATS",
    description:
      "A blazing-fast, beautiful, and hackable CLI tool written in Go to monitor system-level resource usage like CPU, memory, top processes, and users.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "shell script",
        color: "green-text-gradient",
      },
      {
        name: "linux",
        color: "pink-text-gradient",
      },
    ],
    image: ministats,
    source_code_link: "https://github.com/krrishmahar/ministats",
  },
  {
    name: "LabSphere",
    description:
      "LabSphere is a modern web platform for managing labs, doctors, and patients with seamless authentication, booking, and verification flows.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: labsphere,
    source_code_link: "https://github.com/krrishmahar/LabSphere/",
  },
];

export { services, technologies, experiences, testimonials, projects };
