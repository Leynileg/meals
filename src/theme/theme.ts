import { moderateScale } from "services/scale";

const theme = {
  margins: {
    half: moderateScale(4),
    base: moderateScale(8),
    base_x2: moderateScale(16),
    base_x3: moderateScale(24),
    base_x4: moderateScale(32),
    base_x5: moderateScale(40),
    base_x6: moderateScale(48),
  },
  colors: {
    orange: "#ff724c",
    yellow: "#fdbf50",
    light: "#f4f4f8",
    dark: "#2a2c41",
  },
  fonts: {
    weights: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xs: moderateScale(12),
      sm: moderateScale(14),
      base: moderateScale(16),
      lg: moderateScale(18),
      xl: moderateScale(20),
      xl_2: moderateScale(24),
    },
  },
  icons: {
    sizes: {
      base: 8,
      base_x2: 16,
      base_x3: 24,
    },
  },
  borders: {
    radius: {
      half: moderateScale(2),
      base: moderateScale(4),
      base_x2: moderateScale(8),
      base_x3: moderateScale(16),
      base_x4: moderateScale(24),
    },
  },
};

export { theme };
