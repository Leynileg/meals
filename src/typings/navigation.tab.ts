import type { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { STACK_SCREEN_NAME, TAB_SCREEN_NAME } from "@consts/navigation";

import { RootStackParamList } from "./navigation.stack";

type RootTabParamList = {
  [TAB_SCREEN_NAME.MEALS_CATEGORIES]: RootStackParamList;
  [TAB_SCREEN_NAME.MEALS_FAVORITES]: {
    mealId: string;
  };
};

export { RootTabParamList };
