export const CoreColor = {
  Accent: 'accent',
  Primary: 'primary',
  Secondary: 'secondary',
} as const

export type CoreColors = (typeof CoreColor)[keyof typeof CoreColor];
export type CoreColorKeys = keyof typeof CoreColor;
export const CoreColorValues = Object.values(CoreColor);

export const SemanticColor = {
  Danger: 'danger',
  Error: 'error',
  Info: 'info',
  Success: 'success',
  Warning: 'warning',
} as const

export type SemanticColors = (typeof SemanticColor)[keyof typeof SemanticColor];
export type SemanticColorKeys = keyof typeof SemanticColor;
export const SemanticColorValues = Object.values(SemanticColor);

export const CoreSemanticColor = {
  ...CoreColor,
  ...SemanticColor
} as const

export type CoreSemanticColors = typeof CoreSemanticColor[keyof typeof CoreSemanticColor];
export const CoreSemanticColorValues = Object.values(CoreSemanticColor);