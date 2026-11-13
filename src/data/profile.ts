// Contenido del portfolio.

export const profile = {
  name: "Aldo Rodriguez",
  role: "Desarrollador de software",
  location: "Buenos Aires, Argentina",
  intro: {
    highlight: "Desarrollador Full Stack.",
    body: "Trabajo para la Subsecretaría de Modernización del Municipio de Lobos, donde desarrollo micrositios, aplicaciones para la comunidad y soluciones para el día a día.",
  },
  siteUrl: "https://aldorodriguez.com.ar",
  githubUser: "aldomrodriguez",
  socials: {
    github: "https://github.com/aldomrodriguez",
    linkedin: "https://www.linkedin.com/in/aldomrodriguez91/",
    email: "rodriguez.aldo.91@hotmail.com",
  },
  cta: {
    text: "Si llegaste hasta acá, quizás te interese lo que hago.",
  },
};

export type Experience = {
  company: string;
  role: string;
  period?: string;
  url?: string;
  summary: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    company: "Municipio de Lobos",
    role: "Desarrollador · Subsecretaría de Modernización",
    period: "2024 - Presente",
    summary: "Modernización del Municipio, puertas adentro y para los vecinos.",
    details: [
      "Día a día, sumo herramientas que ordenan y simplifican el trabajo interno de las distintas áreas.",
      "Hacia afuera, la idea es facilitarles la vida a los vecinos con trámites más simples y servicios en línea.",
      "Además, proyectos puntuales como micrositios para eventos.",
    ],
  },
  {
    company: "Independiente",
    role: "Desarrollador freelance",
    summary: "Proyectos propios y trabajos a medida.",
    details: [
      "Productos propios, como KIVO y Pedilo por acá.",
      "Sitios y sistemas web a medida para clientes.",
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "layout" | "building" | "code" | "shopping-cart" | "message-chatbot" | "search";
  href: string;
};

export const services: Service[] = [
  { title: "Landing Page", description: "Una página clara y rápida para presentar lo que hacés.", icon: "layout", href: "#contacto" },
  { title: "Web Institucional", description: "Presencia profesional que representa tu marca.", icon: "building", href: "#contacto" },
  { title: "Sistemas a medida", description: "Paneles y herramientas internas para ordenar el trabajo diario.", icon: "code", href: "#contacto" },
  { title: "Tienda y pedidos online", description: "Un catálogo donde tus clientes eligen y hacen su pedido.", icon: "shopping-cart", href: "#contacto" },
  { title: "Bots de atención", description: "Respuestas automáticas con IA en WhatsApp y en tu web.", icon: "message-chatbot", href: "#contacto" },
  { title: "Posicionamiento SEO", description: "Más visibilidad para llegar a tu público.", icon: "search", href: "#contacto" },
];

// Claves de los logos disponibles en StackMarquee.astro.
export type TechIcon =
  | "html5"
  | "css3"
  | "javascript"
  | "typescript"
  | "astro"
  | "react"
  | "nextjs"
  | "nodejs"
  | "tailwind"
  | "php"
  | "mysql"
  | "database"
  | "mongodb"
  | "git"
  | "docker"
  | "wordpress";

export const stack: { name: string; icon: TechIcon }[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Astro", icon: "astro" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PHP", icon: "php" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "database" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
];
