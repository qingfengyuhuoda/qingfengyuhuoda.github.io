export function createRandom(seed: number) {
  seed = Math.floor(seed * (10000 - 0 + 1)) + 0;

  return function (min?: number, max?: number) {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    const result = ((t ^ (t >>> 14)) >>> 0) / 4294967296;

    if (typeof min !== "undefined" && typeof max !== "undefined")
      return Math.floor(result * (max - min + 1)) + min;

    return result;
  };
}
