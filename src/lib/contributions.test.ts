import { describe, expect, it } from "vitest";
import { monthLabels, parseContributions, toWeeks, type Day } from "./contributions";

const day = (date: string): Day => ({ date, count: 1, level: 1 });

describe("toWeeks", () => {
  it("devuelve vacío sin días", () => {
    expect(toWeeks([])).toEqual([]);
  });

  it("rellena la primera semana hasta el día real de inicio", () => {
    // 2025-10-15 fue miércoles (getUTCDay = 3).
    const weeks = toWeeks([day("2025-10-15"), day("2025-10-16")]);
    expect(weeks).toHaveLength(1);
    expect(weeks[0]?.slice(0, 3)).toEqual([null, null, null]);
    expect(weeks[0]?.[3]?.date).toBe("2025-10-15");
  });

  it("corta en columnas de 7 días", () => {
    const days = Array.from({ length: 14 }, (_, i) => day(`2025-10-${String(5 + i).padStart(2, "0")}`));
    const weeks = toWeeks(days);
    expect(weeks).toHaveLength(2);
    expect(weeks.every((week) => week.length === 7)).toBe(true);
  });
});

describe("monthLabels", () => {
  it("etiqueta solo la primera semana de cada mes", () => {
    // 21 días consecutivos desde el domingo 2025-10-19: semanas que empiezan 19/10, 26/10 y 2/11.
    const days = Array.from({ length: 21 }, (_, i) => {
      const date = new Date(Date.UTC(2025, 9, 19 + i));
      return day(date.toISOString().slice(0, 10));
    });
    const labels = monthLabels(toWeeks(days));
    expect(labels).toHaveLength(3);
    expect(labels[0]).toMatch(/oct/i);
    expect(labels[1]).toBeNull();
    expect(labels[2]).toMatch(/nov/i);
  });

  it("omite el mes que no llega a ocupar dos columnas", () => {
    // Del jueves 2025-10-30 al sábado 2025-11-15: octubre solo ocupa la primera semana.
    const days = Array.from({ length: 17 }, (_, i) => {
      const date = new Date(Date.UTC(2025, 9, 30 + i));
      return day(date.toISOString().slice(0, 10));
    });
    const labels = monthLabels(toWeeks(days));
    expect(labels[0]).toBeNull();
    expect(labels[1]).toMatch(/nov/i);
  });
});

describe("parseContributions", () => {
  // Fragmento con la forma del HTML de GitHub: filas por día de la semana, no por fecha.
  const html = `
    <tr>
      <td data-date="2026-10-26" id="contribution-day-component-1-52" data-level="1" class="ContributionCalendar-day"></td>
    </tr>
    <tr>
      <td data-date="2026-10-25" id="contribution-day-component-0-52" data-level="0" class="ContributionCalendar-day"></td>
      <td data-date="2026-10-27" id="contribution-day-component-2-52" data-level="4" class="ContributionCalendar-day"></td>
    </tr>
    <tool-tip for="contribution-day-component-0-52" class="sr-only">No contributions on October 25th.</tool-tip>
    <tool-tip for="contribution-day-component-1-52" class="sr-only">1 contribution on October 26th.</tool-tip>
    <tool-tip for="contribution-day-component-2-52" class="sr-only">18 contributions on October 27th.</tool-tip>`;

  it("ordena los días por fecha y toma la cantidad del tooltip", () => {
    const data = parseContributions(html);
    expect(data?.days).toEqual([
      { date: "2026-10-25", count: 0, level: 0 },
      { date: "2026-10-26", count: 1, level: 1 },
      { date: "2026-10-27", count: 18, level: 4 },
    ]);
    expect(data?.total).toBe(19);
  });

  it("devuelve null si la página no trae el gráfico", () => {
    expect(parseContributions("<html></html>")).toBeNull();
  });
});
