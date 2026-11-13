export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type ContributionData = { total: number; days: Day[] };

// Se ejecuta en el build: el navegador no descarga JavaScript para este gráfico.
// Lee el gráfico público de GitHub directo, sin APIs intermedias que guarden caché.
export async function fetchContributions(user: string): Promise<ContributionData | null> {
  try {
    const res = await fetch(`https://github.com/users/${encodeURIComponent(user)}/contributions`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return parseContributions(await res.text());
  } catch {
    return null;
  }
}

const isLevel = (n: number): n is Day["level"] => Number.isInteger(n) && n >= 0 && n <= 4;

// Cada día es un <td> con fecha y nivel; la cantidad está en su <tool-tip for="id">.
export function parseContributions(html: string): ContributionData | null {
  const counts = new Map<string, number>();
  for (const [, id, text] of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    if (!id || !text) continue;
    counts.set(id, Number(/^(\d+)/.exec(text.trim())?.[1] ?? 0));
  }

  const days: Day[] = [];
  for (const [tag] of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
    const date = /\bdata-date="([^"]+)"/.exec(tag)?.[1];
    const id = /\bid="([^"]+)"/.exec(tag)?.[1];
    const level = Number(/\bdata-level="(\d)"/.exec(tag)?.[1]);
    if (!date || !id || !isLevel(level)) continue;
    days.push({ date, count: counts.get(id) ?? 0, level });
  }
  if (days.length === 0) return null;

  // GitHub arma la tabla por fila (día de la semana): se ordena por fecha.
  days.sort((a, b) => a.date.localeCompare(b.date));
  return { total: days.reduce((sum, day) => sum + day.count, 0), days };
}

// Agrupa los días en columnas de semana (domingo a sábado), rellenando el inicio con null.
export function toWeeks(days: Day[]): (Day | null)[][] {
  const first = days[0];
  if (!first) return [];
  const offset = new Date(`${first.date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array<null>(offset).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

// Columnas mínimas entre etiquetas para que no se pisen ("octnov").
const MIN_LABEL_GAP = 2;

// Etiqueta de mes en la primera semana donde arranca cada mes.
// Si un mes ocupa menos de MIN_LABEL_GAP columnas antes del siguiente, se omite su etiqueta.
export function monthLabels(weeks: (Day | null)[][], locale = "es-AR"): (string | null)[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  let last = -1;
  const labels = weeks.map((week) => {
    const day = week.find((d) => d !== null);
    if (!day) return null;
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth();
    if (month === last) return null;
    last = month;
    return fmt.format(new Date(`${day.date}T00:00:00Z`)).replace(".", "");
  });
  let next = Infinity;
  for (let i = labels.length - 1; i >= 0; i--) {
    if (labels[i] === null) continue;
    if (next - i < MIN_LABEL_GAP) labels[i] = null;
    else next = i;
  }
  return labels;
}
