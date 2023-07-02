// author: https://gist.github.com/nirsky/17b95fc07332bcce64cdb6916a4f271e
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

//Base is considered as 5'' screen device
const baseWidth = 350;
const baseHeight = 680;

/**
 * Scale is typically used for linear scaling meaning will return  straightforward adjusted scaled value. If you want to preserve the aspect ratio of a shape use this. For eg: Can be used for Images
 * @param {number} size
 * @returns {number} scaled size
 */
const scaleToNum = (size: number) => (width / baseWidth) * size;

/**
 * Scale is typically used for linear scaling meaning will return  straightforward adjusted scaled value. If you want to preserve the aspect ratio of a shape use this. For eg: Can be used for Images
 * @param {number} size
 * @returns {string} scaled size in px
 */
const scale = (size: number) => `${scaleToNum(size)}px`;

/**
 * Vertical Scale is used for vertical scaling typically used for height. If you want to scale your vertical dimensions but don't care about the aspect ratio then use this.
 * @param {number} size
 * @returns {string} scaled size in px
 */
const verticalScale = (size: number) => (height / baseHeight) * size;

/**
 * Moderate Scale is the best one to use for font sizes, margins, paddings etc. This has a scale factor that you can vary if is not adjusted according to design
 * @param {number} size
 * @param {number} factor
 * @returns {string} scaled size in px
 */
const moderateScale = (size: number, factor = 0.3) =>
  `${size + (scaleToNum(size) - size) * factor}px`;

export { scale, verticalScale, moderateScale };
