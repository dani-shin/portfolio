export const AVATAR_R = 105;

export const RING_R = 148;

export const SPEAKING_MAX_R = RING_R + 8;

const REF_MAX_R = 172;

export const K = (SPEAKING_MAX_R - AVATAR_R) / (REF_MAX_R - AVATAR_R);

export const sr = (r: number) =>
  Math.min(SPEAKING_MAX_R, AVATAR_R + (r - AVATAR_R) * K);
