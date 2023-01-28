import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { RootTabParamList } from "@typings/navigation.tab";

import { TAB_SCREEN_NAME, theme } from "../consts";
import { Categories, Favorites } from "../@screens";

const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarColor: theme.colors.light,
    }}
    barStyle={{ backgroundColor: theme.colors.light }}
    style={{ padding: 0 }}
  >
    <BottomTab.Screen
      name={TAB_SCREEN_NAME.MEALS_CATEGORIES}
      component={Categories}
      options={{
        tabBarLabel: "Categories",
        tabBarIcon: ({ color }) => (
          <Feather name="home" color={color} size={24} />
        ),
      }}
    />
    <BottomTab.Screen
      name={TAB_SCREEN_NAME.MEALS_FAVORITES}
      component={Favorites}
      options={{
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color }) => (
          <Feather name="star" color={color} size={24} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export { BottomTabNavigator };
