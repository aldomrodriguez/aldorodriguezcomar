import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"proyectos">;

// Proyectos ordenados por el campo `order` del frontmatter.
export async function getProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection("proyectos");
  return projects.toSorted((a, b) => a.data.order - b.data.order);
}

export const projectUrl = (project: ProjectEntry) => `/proyectos/${project.id}/`;
