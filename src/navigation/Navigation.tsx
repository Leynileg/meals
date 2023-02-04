import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { RootStackParamList } from "@typings/navigation.stack";

import { STACK_SCREEN_NAME } from "../consts";
import { MealDetails, MealsOverview } from "../@screens";
import { BottomTabNavigator } from "./BottomTab";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const theme = useTheme();

  const navigatorStyling = {
    headerStyle: {
      backgroundColor: theme.colors.light
    },
    contentStyle: {
      backgroundColor: theme.colors.light,
      padding: 0
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorStyling}>
        <Stack.Screen
          name={STACK_SCREEN_NAME.MEALS_CATEGORIES}
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={STACK_SCREEN_NAME.MEALS_OVERVIEW}
          component={MealsOverview}
          options={{
            contentStyle: {
              padding: 0,
              margin: 0
            }
          }}
        />
        <Stack.Screen
          name={STACK_SCREEN_NAME.MEAL_DETAILS}
          component={MealDetails}
          options={{
            presentation: "modal",
            headerTintColor: theme.colors.dark,
            headerStyle: {
              backgroundColor: theme.colors.yellow
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
