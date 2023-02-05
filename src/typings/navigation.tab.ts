import { TAB_SCREEN_NAME } from "consts/navigation";

import { RootStackParamList } from "./navigation.stack";

type RootTabParamList = {
  [TAB_SCREEN_NAME.MEALS_CATEGORIES]: RootStackParamList;
  [TAB_SCREEN_NAME.MEALS_FAVORITES]: {
    mealId: string;
  };
};

export { RootTabParamList };
