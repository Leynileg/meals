import type { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp,  } from "@react-navigation/native-stack";

import { STACK_SCREEN_NAME } from "@consts/navigation";

type RootStackParamList = {
  [STACK_SCREEN_NAME.MEALS_CATEGORIES]: undefined;
  [STACK_SCREEN_NAME.MEALS_OVERVIEW]: {
    categoryId: string;
  };
  [STACK_SCREEN_NAME.MEAL_DETAILS]: {
    mealId: string;
  };
};

// categories screen
type CategoriesNavigation = NativeStackNavigationProp<
  RootStackParamList,
  STACK_SCREEN_NAME.MEALS_CATEGORIES
>;

// meals overview / favorites screen
type MealsOverviewRoute = RouteProp<
  RootStackParamList,
  STACK_SCREEN_NAME.MEALS_OVERVIEW
>;

type MealsOverviewNavigation = NativeStackNavigationProp<
  RootStackParamList,
  STACK_SCREEN_NAME.MEALS_OVERVIEW
>;

// meal details screen
type MealDetailsNavigation = NativeStackNavigationProp<
  RootStackParamList,
  STACK_SCREEN_NAME.MEAL_DETAILS
>;

type MealDetailsRoute = RouteProp<
  RootStackParamList,
  STACK_SCREEN_NAME.MEAL_DETAILS
>;

export {
  RootStackParamList,
  CategoriesNavigation,
  MealsOverviewRoute,
  MealsOverviewNavigation,
  MealDetailsRoute,
  MealDetailsNavigation,
};
