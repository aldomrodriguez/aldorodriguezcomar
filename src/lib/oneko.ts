// Gato que persigue el cursor. Port de oneko.js (https://github.com/adryd325/oneko.js, MIT © 2022 adryd).
// Lógica pura: recibe el estado y devuelve el siguiente, sin tocar el DOM.

type Frame = readonly [number, number];

export const SPRITES = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  scratchWallN: [[0, 0], [0, -1]],
  scratchWallS: [[-7, -1], [-6, -2]],
  scratchWallE: [[-2, -2], [-2, -3]],
  scratchWallW: [[-4, 0], [-4, -1]],
  tired: [[-3, -2]],
  sleeping: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
} as const satisfies Record<string, readonly Frame[]>;

export type SpriteName = keyof typeof SPRITES;

type IdleAnimation = "sleeping" | "scratchSelf" | "scratchWallN" | "scratchWallS" | "scratchWallE" | "scratchWallW";

export type NekoState = {
  x: number;
  y: number;
  frameCount: number;
  idleTime: number;
  idleAnimation: IdleAnimation | null;
  idleAnimationFrame: number;
};

type Point = { x: number; y: number };
type Size = { width: number; height: number };

export const SPEED = 10;
const SIZE = 32;
const HALF = SIZE / 2;
const REST_DISTANCE = 48;

export const initialState = (): NekoState => ({
  x: 32,
  y: 32,
  frameCount: 0,
  idleTime: 0,
  idleAnimation: null,
  idleAnimationFrame: 0,
});

// Posición CSS del sprite (cada cuadro mide 32x32 en una grilla de 8x4).
export function spritePosition(name: SpriteName, frame: number): string {
  const frames: readonly Frame[] = SPRITES[name];
  const [col, row] = frames[frame % frames.length] ?? frames[0] ?? [0, 0];
  return `${col * SIZE}px ${row * SIZE}px`;
}

function idle(state: NekoState, viewport: Size, random: () => number): { state: NekoState; sprite: SpriteName; frame: number } {
  const next = { ...state, idleTime: state.idleTime + 1 };

  // Cada tanto elige una animación de descanso; rascar la pared solo si está pegado a un borde.
  if (next.idleTime > 10 && Math.floor(random() * 200) === 0 && next.idleAnimation === null) {
    const options: IdleAnimation[] = ["sleeping", "scratchSelf"];
    if (next.x < SIZE) options.push("scratchWallW");
    if (next.y < SIZE) options.push("scratchWallN");
    if (next.x > viewport.width - SIZE) options.push("scratchWallE");
    if (next.y > viewport.height - SIZE) options.push("scratchWallS");
    next.idleAnimation = options[Math.floor(random() * options.length)] ?? "sleeping";
  }

  const reset = () => {
    next.idleAnimation = null;
    next.idleAnimationFrame = 0;
  };

  const frame = next.idleAnimationFrame;
  let sprite: SpriteName = "idle";
  let spriteFrame = 0;

  switch (next.idleAnimation) {
    case "sleeping":
      if (frame < 8) {
        sprite = "tired";
      } else {
        sprite = "sleeping";
        spriteFrame = Math.floor(frame / 4);
        if (frame > 192) reset();
      }
      break;
    case "scratchWallN":
    case "scratchWallS":
    case "scratchWallE":
    case "scratchWallW":
    case "scratchSelf":
      sprite = next.idleAnimation;
      spriteFrame = frame;
      if (frame > 9) reset();
      break;
    default:
      return { state: next, sprite: "idle", frame: 0 };
  }

  if (next.idleAnimation !== null) next.idleAnimationFrame += 1;
  return { state: next, sprite, frame: spriteFrame };
}

// Un paso de animación (el componente lo llama cada 100 ms).
export function step(
  state: NekoState,
  mouse: Point,
  viewport: Size,
  random: () => number = Math.random,
): { state: NekoState; sprite: SpriteName; frame: number } {
  const frameCount = state.frameCount + 1;
  const dx = state.x - mouse.x;
  const dy = state.y - mouse.y;
  const distance = Math.hypot(dx, dy);

  if (distance < SPEED || distance < REST_DISTANCE) {
    return idle({ ...state, frameCount }, viewport, random);
  }

  const base = { ...state, frameCount, idleAnimation: null, idleAnimationFrame: 0 };

  // Antes de arrancar a correr se queda alerta un instante.
  if (state.idleTime > 1) {
    return { state: { ...base, idleTime: Math.min(state.idleTime, 7) - 1 }, sprite: "alert", frame: 0 };
  }

  let direction = "";
  if (dy / distance > 0.5) direction += "N";
  if (dy / distance < -0.5) direction += "S";
  if (dx / distance > 0.5) direction += "W";
  if (dx / distance < -0.5) direction += "E";

  const x = Math.min(Math.max(HALF, state.x - (dx / distance) * SPEED), viewport.width - HALF);
  const y = Math.min(Math.max(HALF, state.y - (dy / distance) * SPEED), viewport.height - HALF);

  return { state: { ...base, x, y }, sprite: direction as SpriteName, frame: frameCount };
}
