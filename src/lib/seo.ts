// Datos estructurados (JSON-LD de schema.org) para que Google entienda quién es el autor
// del sitio y de qué trata cada proyecto. Funciones puras: reciben URLs absolutas.

type PersonInput = {
  name: string;
  jobTitle: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
  sameAs: string[];
  locality: string;
  region: string;
  skills: string[];
};

type ProjectInput = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  year: string;
  tags: string[];
  liveUrl?: string;
};

// Identificadores estables: los proyectos apuntan a la persona en lugar de repetirla.
export const personId = (siteUrl: string) => new URL("/#persona", siteUrl).href;
const websiteId = (siteUrl: string) => new URL("/#sitio", siteUrl).href;

export function homeSchema(person: PersonInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId(person.siteUrl),
        url: person.siteUrl,
        name: person.name,
        inLanguage: "es-AR",
        publisher: { "@id": personId(person.siteUrl) },
      },
      {
        "@type": "Person",
        "@id": personId(person.siteUrl),
        name: person.name,
        url: person.siteUrl,
        image: person.imageUrl,
        jobTitle: person.jobTitle,
        description: person.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: person.locality,
          addressRegion: person.region,
          addressCountry: "AR",
        },
        knowsAbout: person.skills,
        sameAs: person.sameAs,
      },
    ],
  };
}

export function projectSchema(project: ProjectInput, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.url,
    image: project.imageUrl,
    dateCreated: project.year,
    keywords: project.tags.join(", "),
    inLanguage: "es-AR",
    author: { "@id": personId(siteUrl) },
    isPartOf: { "@id": websiteId(siteUrl) },
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}

// Serializa para un <script type="application/ld+json">: escapa "<" para que ningún
// texto pueda cerrar la etiqueta antes de tiempo.
export const serializeSchema = (schema: object) => JSON.stringify(schema).replaceAll("<", "\\u003c");
