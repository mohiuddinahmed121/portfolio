// Portfolio-r shob content ekhane. Text/link/project change korte hole shudhu ei file edit korun.

export const profile = {
   name: "Mohiuddin Ahmed",
   shortName: "Mohiuddin",
   role: "Web Designer & Developer",
   tagline:
      "CSE graduate from the University of Asia Pacific, building responsive web projects and solving problems with code.",
   email: "mohiuddinahmed121@gmail.com",
   phone: "+8801881649533",
   location: "Dhaka, Bangladesh",
   github: "https://github.com/mohiuddinahmed121",
   // TODO: nijer real link boshan
   linkedin: "https://www.linkedin.com/in/mohiuddinahmed121",
   facebook: "https://www.facebook.com/mohiuddinahmed121",
   // TODO: CV PDF-ta public/ folder-e ei naam-e rakhun
   cv: "/Mohiuddin_Ahmed_CV.pdf",
   // TODO: nijer chhobi public/images/profile.jpg e rakhun (ager IMG_3242.JPG rename kore)
   photo: "/images/profile-image.jpeg",
   about: [
      "I’m a Computer Science and Engineering graduate from the University of Asia Pacific (June 2026), passionate about technology and problem-solving.",
      "With skills in programming, data structures, and software development, I’m eager to apply my knowledge to real-world projects. I enjoy exploring new technologies and continuously expanding my expertise.",
      "Outside of studies, I love traveling and watching movies.",
   ],
   interests: ["Music", "Travel", "Movies", "Sports"],
};

export const stats = [
   { value: "8", label: "Live projects" },
   { value: "11+", label: "Technologies" },
   //{ value: "150+", label: "Problems solved" },
];

export const education = [
   {
      school: "University of Asia Pacific",
      detail: "Department of Computer Science and Engineering",
      period: "June 2022 – June 2026",
   },
   {
      school: "Khilgaon Model College",
      detail: "Higher Secondary Certificate",
      period: "2020",
   },
   {
      school: "Jurain Adarsha Academy",
      detail: "Secondary School Certificate",
      period: "2017",
   },
];

export const skills = [
   {
      group: "Frontend",
      items: ["Next.js", "React.js", "Tailwind CSS", "TanStack Query", "HTML & CSS"],
   },
   {
      group: "Backend & Database",
      items: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MongoDB"],
   },
   {
      group: "Authentication & Payment",
      items: ["JWT", "Role-Based Access Control", "Stripe", "bKash", "Stripe Webhooks"],
   },
   { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
   // University-te shikhechi, abar practice korle "Languages" e tule nite paren
   { group: "Foundations (university)", items: ["C", "C++", "Java"] },
];

// TODO: protita project-er description ar tags nijer moto likhe din.
export const projects = [
   {
      title: "Resource Sharing Project",
      url: "https://react-dragon-news-auth-fd823.web.app/",
      image: "/images/work-5.jpg",
      description: "Live demo of the Resource Sharing project.",
      tags: ["Web"],
   },
   {
      title: "University Management System",
      url: "https://university-management-system-fronte-azure.vercel.app/",
      image: "/images/work-6.jpg",
      description: "Live demo of the  University Management system.",
      tags: ["Web", "API"],
   },
   {
      title: "Fixitnow-Home Service Provider",
      url: "https://fixitnow-frontend-omega.vercel.app/",
      image: "/images/work-7.jpg",
      description: "Live demo of the Fixitnow project.",
      tags: ["Web"],
   },
   {
      title: "Travel Website",
      url: "https://mohiuddinahmed121.github.io/Hero-Travel-website-/",
      image: "/images/work-8.jpg",
      description: "Live demo of the Travel Website project.",
      tags: ["Web"],
   },
   {
      title: "Smart Ticketing",
      url: "https://mohiuddinahmed121.github.io/smart-ticketing/",
      image: "/images/work-1.jpg",
      description: "Live demo of the Smart Ticketing project.",
      tags: ["Web"],
   },
   {
      title: "Book Review",
      url: "https://magical-seahorse-3ae3c9.netlify.app/",
      image: "/images/work-2.jpg",
      description: "Live demo of the Book Review project.",
      tags: ["Web"],
   },
   {
      title: "Recipe Calories",
      url: "https://quiet-banoffee-7db5a4.netlify.app/",
      image: "/images/work-3.jpg",
      description: "Live demo of the Recipe Calories project.",
      tags: ["Web"],
   },
   {
      title: "Alphabet Clash",
      url: "https://tourmaline-bunny-fd2160.netlify.app/",
      image: "/images/work-4.jpg",
      description: "Live demo of the Alphabet Clash project.",
      tags: ["Web"],
   },
];
