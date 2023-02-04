import { PixelRatio } from "react-native";

/**
 * Converts dp to px - use it only for texts
 * @param {px} px:pixels amount
 * @returns {number}
 */
const dp = (px: number) => {
  return `${PixelRatio.getPixelSizeForLayoutSize(px)}px`;
};

export { dp };
