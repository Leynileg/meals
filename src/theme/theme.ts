import { dp } from "services/Dp";
import { sp } from "services/Sp";

const theme = {
  margins: {
    half: dp(2),
    base: dp(4),
    base_x2: dp(8),
    base_x3: dp(16),
    base_x4: dp(24),
    base_x5: dp(32),
    base_x6: dp(40),
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
      xs: sp(12),
      sm: sp(14),
      base: sp(16),
      lg: sp(18),
      xl: sp(20),
      xl_2: sp(24),
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
      half: dp(2),
      base: dp(4),
      base_x2: dp(8),
      base_x3: dp(16),
      base_x4: dp(24),
    },
  },
};

export { theme };
