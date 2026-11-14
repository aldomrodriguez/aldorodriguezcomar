import { describe, expect, it } from "vitest";
import { homeSchema, personId, projectSchema, serializeSchema } from "./seo";

const siteUrl = "https://aldorodriguez.com.ar";

const person = {
  name: "Aldo Rodriguez",
  jobTitle: "Desarrollador Full Stack",
  description: "Desarrollo sitios y sistemas web.",
  siteUrl,
  imageUrl: `${siteUrl}/foto.webp`,
  sameAs: ["https://github.com/aldomrodriguez"],
  locality: "Lobos",
  region: "Buenos Aires",
  skills: ["TypeScript", "Astro"],
};

describe("homeSchema", () => {
  it("describe el sitio y la persona, enlazados por id", () => {
    const schema = homeSchema(person);
    const [website, persona] = schema["@graph"];

    expect(website?.["@type"]).toBe("WebSite");
    expect(website?.publisher).toEqual({ "@id": personId(siteUrl) });
    expect(persona?.["@type"]).toBe("Person");
    expect(persona?.["@id"]).toBe("https://aldorodriguez.com.ar/#persona");
  });
});

describe("projectSchema", () => {
  const project = {
    title: "KIVO",
    description: "Bots de atención",
    url: `${siteUrl}/proyectos/kivo/`,
    imageUrl: `${siteUrl}/kivo.jpg`,
    year: "2026",
    tags: ["TypeScript", "React"],
  };

  it("atribuye el proyecto a la persona del sitio", () => {
    const schema = projectSchema(project, siteUrl);
    expect(schema.author).toEqual({ "@id": personId(siteUrl) });
    expect(schema.keywords).toBe("TypeScript, React");
  });

  it("solo agrega el sitio publicado si existe", () => {
    expect(projectSchema(project, siteUrl)).not.toHaveProperty("sameAs");
    expect(projectSchema({ ...project, liveUrl: "https://kivo.app/" }, siteUrl).sameAs).toBe("https://kivo.app/");
  });
});

describe("serializeSchema", () => {
  it("no permite cerrar la etiqueta script desde un texto", () => {
    const json = serializeSchema({ name: "</script><script>alert(1)</script>" });
    expect(json).not.toContain("</script>");
    expect(JSON.parse(json).name).toBe("</script><script>alert(1)</script>");
  });
});
