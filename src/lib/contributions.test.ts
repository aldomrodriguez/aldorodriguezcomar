import { describe, expect, it } from "vitest";
import { monthLabels, toWeeks, type Day } from "./contributions";

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
});
