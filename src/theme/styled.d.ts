import "styled-components/native";

import { theme } from "./theme";

type Theme = typeof theme;

declare module "styled-components/native" {
  interface DefaultTheme extends Theme {}
}
