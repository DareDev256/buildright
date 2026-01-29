// Duolingo-inspired vibrant design system for BuildRight

export const WARM_BG = "#F7F5F0";

export const COLORS = {
  featherGreen: { face: "#58CC02", bottom: "#46A302" },
  macawBlue: { face: "#1CB0F6", bottom: "#1899D6" },
  beeYellow: { face: "#FFC800", bottom: "#E0B000" },
  foxPurple: { face: "#CE82FF", bottom: "#A660E0" },
  cardinalRed: { face: "#FF4B4B", bottom: "#E04343" },
  tigerOrange: { face: "#FF9600", bottom: "#E08600" },
  hawkBlue: { face: "#2B70C9", bottom: "#2260B0" },
  snow: { face: "#FFFFFF", bottom: "#E5E5E5" },
  eel: "#4B4B4B",
  hare: "#AFAFAF",
  swan: "#FFFFFF",
};

export type ColorPair = { face: string; bottom: string };

export const MODULE_THEMES: Record<string, { emoji: string; color: ColorPair }> = {
  "1": { emoji: "🏗️", color: COLORS.macawBlue },
  "2": { emoji: "🏡", color: COLORS.featherGreen },
  "3": { emoji: "💰", color: COLORS.beeYellow },
  "4": { emoji: "📐", color: COLORS.foxPurple },
  "5": { emoji: "📋", color: COLORS.cardinalRed },
  "6": { emoji: "🔨", color: COLORS.tigerOrange },
  "7": { emoji: "🎉", color: COLORS.hawkBlue },
};

/** 3D raised-button/card style — the Duolingo signature look */
export function card3D(face: string, bottom: string, radius = 16) {
  return {
    backgroundColor: face,
    borderRadius: radius,
    borderBottomWidth: 4 as const,
    borderBottomColor: bottom,
  };
}
