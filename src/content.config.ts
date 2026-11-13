import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada proyecto es un .md en src/content/proyectos: el frontmatter alimenta la tarjeta
// y el cuerpo es el caso de estudio de /proyectos/<nombre-del-archivo>.
const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      role: z.string(),
      year: z.string(),
      status: z.string(),
      tags: z.array(z.string()),
      // Tono de la portada generada cuando no hay captura.
      hue: z.number(),
      order: z.number(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      liveUrl: z.url().optional(),
      // "privado" si el código no se puede mostrar.
      repo: z.union([z.literal("privado"), z.url()]).optional(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string(),
            device: z.enum(["desktop", "mobile"]).default("desktop"),
          }),
        )
        .default([]),
    }),
});

export const collections = { proyectos };
