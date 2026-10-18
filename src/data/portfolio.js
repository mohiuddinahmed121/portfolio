export const profile = {
   name: "Mohiuddin Ahmed",
   shortName: "Mohiuddin",
   role: "Full-Stack Developer",
   tagline:
      "CSE graduate from the University of Asia Pacific, building responsive web projects and solving problems with code.",
   email: "mohiuddinahmed121@gmail.com",
   phone: "+8801881649533",
   location: "Dhaka, Bangladesh",
   github: "https://github.com/mohiuddinahmed121",
   linkedin: "https://www.linkedin.com/in/mohiuddinahmed121/",

   facebook: "https://www.facebook.com/mohiuddinahmed121",

   cv: "/Mohiuddin_Ahmed_CV.pdf",

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
   { value: "50+", label: "Problems solved" },
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
      items: ["JWT", "Role-Based Access Control", "bKash", "Stripe", "Stripe Webhooks"],
   },
   { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },

   { group: "Foundations (university)", items: ["C", "C++", "Java"] },
];

export const experience = [
   {
      role: "Frontend Developer Intern",
      company: "Eutropia IT Bangladesh",
      companyUrl: "https://eutropia-it.com",
      period: "Feb 20, 2026 – Jun 20, 2026",
      points: [
         "Translated UI/UX wireframes into interactive, responsive web applications using modern frontend frameworks.",
         "Built reusable, component-driven interfaces with close attention to detail.",
         "Followed clean code practices while working on responsive layouts.",
      ],

      certificate: "/eutropia-experience.pdf",
   },
];

export const certificates = [
   {
      title: "InnovateX 2025 – Hackathon",
      description: "Participated in the hackathon as team “Asgardians”.",
      issuer: "Software & Hardware Club, CSE-UAP",
      date: "7 May 2025",
      image: "/images/certificates/innovatex-2025.png",
      pdf: "/innovatex-2025.pdf",
   },
   {
      title: "Certificate of Experience – Frontend Developer Intern",
      description: "Completed a frontend developer internship at Eutropia IT Bangladesh.",
      issuer: "Eutropia IT Bangladesh",
      date: "Feb – Jun 2026",
      image: "/images/certificates/eutropia-experience.png",
      pdf: "/eutropia-experience.pdf",
   },
];

export const projects = [
   {
      slug: "fixitnow",
      title: "FixItNow",
      url: "https://fixitnow-frontend-omega.vercel.app/",
      repo: "https://github.com/mohiuddinahmed121/FixItNow-frontend",
      image: "/images/fixitnow.jpg",
      description:
         "Full-stack home service marketplace with role-based workflows, JWT auth, and Stripe Checkout payments.",
      tags: ["Full-Stack", "Next.js", "Stripe"],
      details: {
         stack: [
            "Next.js",
            "React.js",
            "TypeScript",
            "TanStack Query",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "JWT",
            "Stripe",
         ],
         overview:
            "FixItNow is a full-stack home service marketplace that connects customers with technicians. Customers can browse services, book a technician, pay online with Stripe Checkout, and leave a review. Technicians update the status of their bookings, and Admin users have their own role with separate permissions. The backend is a REST API built with Express.js, Prisma, and PostgreSQL.",
         challenges: [
            "Role-based access control: designing separate workflows and permissions for Customer, Technician, and Admin users, and enforcing them on both the API and the UI.",
            "Stripe webhooks: verifying webhook signatures and updating the booking payment status from Stripe's confirmation instead of trusting the client redirect.",
            "Data modeling: modeling users, services, bookings, and reviews with Prisma and PostgreSQL so booking states stay consistent.",
            "Server state on the client: keeping booking lists and statuses fresh with TanStack Query after updates.",
         ],
         improvements: [
            "Real-time booking notifications by email or push for customers and technicians.",
            "Technician availability calendar and scheduling.",
            "Search and filters by location, price, and rating.",
            "Automated unit and integration tests for the API and the payment flow.",
            "Refund handling and a payout flow for technicians.",
         ],
      },
   },
   {
      slug: "university-management-system",
      title: "University Management System",
      url: "https://university-management-system-fronte-azure.vercel.app/",
      repo: "https://github.com/mohiuddinahmed121/University-Management-System-Frontend",
      image: "/images/ums.jpg",
      description:
         "Manages students, instructors, courses, registrations, and results, with bKash payments.",
      tags: ["Full-Stack", "Next.js", "bKash"],
      details: {
         stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "JWT",
            "Zod",
            "bKash",
         ],
         overview:
            "A full-stack system to manage students, instructors, courses, sections, registrations, and academic results. It has role-based access for Admin, Instructor, and Student users. Admins manage departments, courses, and sections, students register for courses and view their results, and instructors submit and update results. Online payments are supported through bKash.",
         challenges: [
            "Role-based workflows: supporting three user types with different pages and permissions.",
            "Relational data: modeling departments, courses, sections, registrations, and results with Prisma and PostgreSQL and keeping the relations consistent.",
            "Request validation: using Zod to validate incoming data on the API and return consistent errors.",
            "Payment integration: integrating bKash and handling the payment flow.",
         ],
         improvements: [
            "Class routines and attendance tracking.",
            "Semester-wise CGPA calculation and transcript PDF export.",
            "Notifications for result publication and registration deadlines.",
            "Admin analytics dashboard.",
            "Automated tests and a CI pipeline.",
         ],
      },
   },
   {
      slug: "book-review-system",
      title: "Book Review System",
      url: "https://clinquant-sfogliatella-22b09d.netlify.app/",
      repo: "https://github.com/mohiuddinahmed121/Book-Review-project",
      image: "/images/work-2.jpg",
      description:
         "Full-stack app for browsing books and submitting reviews, with CRUD for books and reviews.",
      tags: ["Full-Stack", "Node.js", "MongoDB"],
      details: {
         stack: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
         overview:
            "A full-stack web application for browsing books and submitting user reviews. It supports create, read, update, and delete operations for books and reviews through structured backend APIs, with a clean and responsive interface.",
         challenges: [
            "API structure: designing clear REST endpoints for books and reviews.",
            "Data relationships: linking reviews to the right book in MongoDB.",
            "Responsive UI: keeping the interface usable across screen sizes.",
         ],
         improvements: [
            "User authentication so reviews belong to logged-in users.",
            "Average ratings, search, and pagination.",
            "Automated tests for the API.",
         ],
      },
   },
   {
      slug: "alphabet-clash-pro",
      title: "Alphabet Clash Pro",
      url: "https://mohiuddinahmed121.github.io/alphabet-clash-pro/",
      repo: "https://github.com/mohiuddinahmed121/alphabet-clash-pro",
      image: "/images/work-4.jpg",
      description: "Browser-based word game to improve typing speed and reflex accuracy.",
      tags: ["JavaScript", "HTML", "CSS"],
      details: {
         stack: ["JavaScript", "HTML", "CSS"],
         overview:
            "An interactive browser-based word game that helps players improve typing speed and reflex accuracy. It handles real-time keyboard input, scoring, and dynamic gameplay, with a responsive design and smooth UI interactions.",
         challenges: [
            "Real-time input: handling keyboard events quickly and accurately during gameplay.",
            "Scoring logic: keeping the score and game state correct as the game progresses.",
            "Responsive design: keeping the game usable on different screen sizes.",
         ],
         improvements: [
            "Difficulty levels and a leaderboard.",
            "Saving high scores between sessions.",
            "Sound effects and better mobile support.",
         ],
      },
   },
   {
      slug: "smart-ticketing",
      title: "Smart Ticketing",
      url: "https://mohiuddinahmed121.github.io/smart-ticketing/",
      image: "/images/work-1.jpg",
      description: "Live demo of the Smart Ticketing project.",
      tags: ["Web"],
   },
   {
      slug: "vault-academic-resource-sharing",
      title: "Vault — Academic Resource Sharing",
      url: "https://react-dragon-news-auth-fd823.web.app/",
      repo: "https://github.com/mohiuddinahmed121/resource-sharing-project",
      image: "/images/vault.jpg",
      description:
         "A platform for university students to upload, search, rate, and download academic resources.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
      details: {
         stack: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase Authentication",
            "Cloudinary",
         ],
         overview:
            "Vault is an academic resource-sharing platform where students can upload, search, rate, and download assignments, notes, lab reports, and previous exam papers.",
         challenges: [
            "Implementing secure authentication and private routes.",
            "Managing PDF uploads and Cloudinary storage.",
            "Building efficient search, filtering, and pagination.",
         ],
         improvements: [
            "Add bookmarks and download history.",
            "Introduce document moderation and reporting.",
            "Improve search and add personalized recommendations.",
         ],
      },
   },
   {
      slug: "recipe-calories",
      title: "Recipe Calories",
      url: "https://quiet-banoffee-7db5a4.netlify.app/",
      image: "/images/work-3.jpg",
      description: "Live demo of the Recipe Calories project.",
      tags: ["Web"],
   },
   {
      slug: "travel-website",
      title: "Travel Website",
      url: "https://mohiuddinahmed121.github.io/Hero-Travel-website-/",
      image: "/images/work-8.jpg",
      description: "Live demo of the Travel Website project.",
      tags: ["Web"],
   },
];
