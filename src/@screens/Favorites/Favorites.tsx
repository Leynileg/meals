import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealsOverviewNavigation } from "@typings/navigation.stack";

import { STACK_SCREEN_NAME } from "@consts/navigation";
import { theme } from "@consts/theme";

import { MealTile } from "@components/MealTile";

import { getFavorites } from "@store/favorites";
import { useAppSelector } from "@store/hooks";

const Favorites: React.FC = () => {
  const navigation = useNavigation<MealsOverviewNavigation>();
  const favoriteMeals = useAppSelector(getFavorites);

  // it's impossible to have mealsIdsList without mealsList
  // so there's no need for a loading screen here
  if (!favoriteMeals.length) {
    return (
      <View style={styles.root}>
        <Text>It's empty ¯\_(ツ)_/¯</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={favoriteMeals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MealTile
            {...item}
            onPress={() =>
              navigation.push(STACK_SCREEN_NAME.MEAL_DETAILS, {
                mealId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export { Favorites };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.margins.base_x3,
  },
});
