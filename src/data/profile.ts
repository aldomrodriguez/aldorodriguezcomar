// Contenido del portfolio. Todo lo marcado con "PRUEBA" es dato de ejemplo para reemplazar.

export const profile = {
  name: "Aldo Rodriguez",
  role: "Desarrollador de software",
  location: "Lobos, Buenos Aires", // PRUEBA
  tagline: "Construir soluciones simples para problemas reales.", // PRUEBA
  badge: "Disponible para proyectos", // PRUEBA
  intro: {
    highlight: "Creo herramientas digitales que hacen crecer negocios.",
    body: "Desarrollo desde una landing page hasta sistemas de gestión empresarial: e-commerce, menús digitales, webs institucionales y posicionamiento SEO. Me adapto a lo que cada cliente necesita y entrego productos rápidos, cuidados y fáciles de mantener.",
  },
  siteUrl: "https://aldorodriguez.com.ar",
  githubUser: "aldomrodriguez",
  socials: {
    github: "https://github.com/aldomrodriguez",
    linkedin: "https://www.linkedin.com/in/aldorodriguez", // PRUEBA
    email: "hola@aldorodriguez.com.ar", // PRUEBA
  },
  cta: {
    text: "Si llegaste hasta acá, quizás te interese lo que hago.",
    label: "Agendá una llamada",
    href: "mailto:hola@aldorodriguez.com.ar", // PRUEBA
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  url?: string;
  summary: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    company: "AldoRodriguez",
    role: "Fundador y desarrollador",
    period: "2020 - Presente", // PRUEBA
    url: "https://aldorodriguez.com.ar",
    summary: "Desarrollo de software a medida para pymes y comercios.",
    details: [
      "Diseño y desarrollo de webs institucionales, landing pages y e-commerce.",
      "Menús digitales y catálogos para gastronomía y comercios.",
      "Estrategias de posicionamiento SEO.",
    ],
  },
  {
    company: "Empresa de ejemplo", // PRUEBA
    role: "Desarrollador full stack",
    period: "2018 - 2020",
    summary: "Desarrollo de sistemas internos y portales web.",
    details: [
      "Mantenimiento de aplicaciones web en producción.",
      "Integraciones con APIs de terceros.",
    ],
  },
  {
    company: "Otra empresa", // PRUEBA
    role: "Desarrollador frontend",
    period: "2016 - 2018",
    summary: "Maquetación e interfaces para clientes de distintos rubros.",
    details: ["Sitios responsive y accesibles.", "Trabajo con diseñadores en sistemas de componentes."],
  },
];

export type Post = { title: string; href: string };

// PRUEBA
export const posts: Post[] = [
  { title: "Por qué tu negocio necesita una web rápida en 2026", href: "#" },
  { title: "Landing page vs. web institucional: cuál elegir", href: "#" },
  { title: "SEO local: cómo aparecer cuando te buscan en tu ciudad", href: "#" },
];

export type Service = {
  title: string;
  description: string;
  icon: "layout" | "article" | "shopping-cart" | "tools-kitchen" | "building" | "search";
  href: string;
};

export const services: Service[] = [
  { title: "Landing Page", description: "Captá la atención de tus clientes desde el primer segundo.", icon: "layout", href: "#contacto" },
  { title: "Blog", description: "Mantené a tu audiencia actualizada con contenido propio.", icon: "article", href: "#contacto" },
  { title: "E-commerce", description: "Una tienda intuitiva y segura para vender online.", icon: "shopping-cart", href: "#contacto" },
  { title: "Menú Digital", description: "Una experiencia interactiva para tus clientes.", icon: "tools-kitchen", href: "#contacto" },
  { title: "Web Institucional", description: "Presencia profesional que representa tu marca.", icon: "building", href: "#contacto" },
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
  | "git"
  | "docker"
  | "wordpress"
  | "figma";

// PRUEBA: ajustar a tu stack real.
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
  { name: "WordPress", icon: "wordpress" },
  { name: "Figma", icon: "figma" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
];

export type Highlight = { title: string; year: string; description: string; href: string };

// PRUEBA
export const highlights: Highlight[] = [
  {
    title: "Menú Digital: de la carta en papel al QR",
    year: "2025",
    description: "Más de 30 comercios gestionan sus cartas desde un panel propio.",
    href: "#",
  },
  {
    title: "Tienda Online: ventas 24/7 para un comercio local",
    year: "2025",
    description: "Catálogo, carrito y pagos con tiempos de carga por debajo del segundo.",
    href: "#",
  },
  {
    title: "Sistema de Gestión: stock y ventas en un solo lugar",
    year: "2024",
    description: "Reemplazo de planillas por un sistema con reportes en tiempo real.",
    href: "#",
  },
];
