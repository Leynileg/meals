import { DefaultTheme } from "styled-components/native";

import { dp } from "@services/Dp";
import { sp } from "@services/Sp";

const theme: DefaultTheme = {
  margins: {
    half: dp(4),
    base: dp(8),
    base_x2: dp(16),
    base_x3: dp(24),
    base_x4: dp(32),
    base_x5: dp(40),
    base_x6: dp(48)
  },
  colors: {
    orange: "#ff724c",
    yellow: "#fdbf50",
    light: "#f4f4f8",
    dark: "#2a2c41"
  },
  fonts: {
    weights: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700
    },
    sizes: {
      half: sp(8),
      base: sp(16),
      base_x2: sp(24),
      base_x3: sp(32),
      base_x4: sp(40)
    }
  },
  icons: {
    sizes: {
      base: 8,
      base_x2: 16,
      base_x3: 24
    }
  },
  borders: {
    radius: {
      half: dp(4),
      base: dp(8),
      base_x2: dp(16),
      base_x3: dp(24),
      base_x4: dp(32)
    }
  }
};

export { theme };
