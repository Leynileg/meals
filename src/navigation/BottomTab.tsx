import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { RootTabParamList } from "@typings/navigation.tab";

import { TAB_SCREEN_NAME } from "../consts";
import { Categories, Favorites } from "../@screens";

interface TabBarIconParams {
  color: string;
}

const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarColor: theme.colors.light
      }}
      barStyle={{ backgroundColor: theme.colors.light }}
      style={{ padding: 0 }}
    >
      <BottomTab.Screen
        name={TAB_SCREEN_NAME.MEALS_CATEGORIES}
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }: TabBarIconParams) => (
            <Feather
              name="home"
              color={color}
              size={theme.icons.sizes.base_x3}
            />
          )
        }}
      />
      <BottomTab.Screen
        name={TAB_SCREEN_NAME.MEALS_FAVORITES}
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }: TabBarIconParams) => (
            <Feather
              name="star"
              color={color}
              size={theme.icons.sizes.base_x3}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export { BottomTabNavigator };
