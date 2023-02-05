import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    margins: {
      half: string;
      base: string;
      base_x2: string;
      base_x3: string;
      base_x4: string;
      base_x5: string;
      base_x6: string;
    };
    colors: {
      orange: string;
      yellow: string;
      light: string;
      dark: string;
    };
    fonts: {
      weights: {
        light: number;
        normal: number;
        semibold: number;
        bold: number;
      };
      sizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        xl_2: string;
      };
    };
    icons: {
      sizes: {
        base: number;
        base_x2: number;
        base_x3: number;
      };
    };
    borders: {
      radius: {
        half: string;
        base: string;
        base_x2: string;
        base_x3: string;
        base_x4: string;
      };
    };
  }
}
