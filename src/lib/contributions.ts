export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type ContributionData = { total: number; days: Day[] };

type ApiResponse = { total: { lastYear: number }; contributions: Day[] };

const API = "https://github-contributions-api.jogruber.de/v4";

// Se ejecuta en el build: el navegador no descarga JavaScript para este gráfico.
export async function fetchContributions(user: string): Promise<ContributionData | null> {
  try {
    const res = await fetch(`${API}/${encodeURIComponent(user)}?y=last`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as ApiResponse;
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
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

// Etiqueta de mes en la primera semana donde arranca cada mes.
export function monthLabels(weeks: (Day | null)[][], locale = "es-AR"): (string | null)[] {
  const fmt = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  let last = -1;
  return weeks.map((week) => {
    const day = week.find((d) => d !== null);
    if (!day) return null;
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth();
    if (month === last) return null;
    last = month;
    return fmt.format(new Date(`${day.date}T00:00:00Z`)).replace(".", "");
  });
}
