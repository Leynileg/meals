import { PixelRatio } from "react-native";

/**
 * Converts sp to px - use it only for texts
 * @param {px} px:pixels amount
 * @returns {string}
 */
export const sp = (px: number) => {
  return `${px / PixelRatio.getFontScale()}px`;
};
