import { describe, expect, it } from "vitest";
import { initialState, SPEED, spritePosition, step, type NekoState } from "./oneko";

const viewport = { width: 1000, height: 800 };
const never = () => 0.5; // nunca dispara animaciones de descanso al azar

describe("step", () => {
  it("corre hacia el cursor a velocidad fija y elige la dirección", () => {
    const { state, sprite } = step(initialState(), { x: 500, y: 32 }, viewport, never);
    expect(state.x).toBeCloseTo(32 + SPEED);
    expect(state.y).toBe(32);
    expect(sprite).toBe("E");
  });

  it("usa direcciones diagonales", () => {
    const { sprite } = step({ ...initialState(), x: 500, y: 500 }, { x: 100, y: 100 }, viewport, never);
    expect(sprite).toBe("NW");
  });

  it("se queda quieto cerca del cursor", () => {
    const start = initialState();
    const { state, sprite } = step(start, { x: 40, y: 40 }, viewport, never);
    expect(state.x).toBe(start.x);
    expect(sprite).toBe("idle");
    expect(state.idleTime).toBe(1);
  });

  it("se pone alerta antes de arrancar si estaba descansando", () => {
    const rested: NekoState = { ...initialState(), idleTime: 20 };
    const { state, sprite } = step(rested, { x: 600, y: 600 }, viewport, never);
    expect(sprite).toBe("alert");
    expect(state.x).toBe(rested.x);
    expect(state.idleTime).toBe(6);
  });

  it("no sale de la pantalla", () => {
    const edge: NekoState = { ...initialState(), x: 995, y: 400 };
    const { state } = step(edge, { x: 5000, y: 400 }, viewport, never);
    expect(state.x).toBe(viewport.width - 16);
  });

  it("se duerme tras un rato quieto: primero cansado, después dormido", () => {
    const zero = () => 0; // fuerza la elección de "sleeping"
    let state: NekoState = { ...initialState(), idleTime: 11 };
    const first = step(state, { x: 32, y: 32 }, viewport, zero);
    expect(first.state.idleAnimation).toBe("sleeping");
    expect(first.sprite).toBe("tired");

    state = { ...first.state, idleAnimationFrame: 8 };
    expect(step(state, { x: 32, y: 32 }, viewport, never).sprite).toBe("sleeping");
  });
});

describe("spritePosition", () => {
  it("convierte el cuadro a posición CSS y cicla los cuadros", () => {
    expect(spritePosition("idle", 0)).toBe("-96px -96px");
    expect(spritePosition("E", 1)).toBe("-96px -32px");
    expect(spritePosition("E", 2)).toBe(spritePosition("E", 0));
  });
});
