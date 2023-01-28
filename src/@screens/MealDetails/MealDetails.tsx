import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";
import debounce from "lodash.debounce";

import {
  MealDetailsRoute,
  MealDetailsNavigation,
} from "@typings/navigation.stack";

import { theme } from "@consts/theme";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  addFavorite,
  fetchFavorites,
  getFavoritesIds,
  removeFavorite,
} from "@store/favorites";
import { getMeal } from "@store/meals";

import { MealBaseInfo } from "@components/MealBaseInfo";
import { Subtitle, List } from "@components/MealDetails";
import { IconButton } from "@components/IconButton";

const MealDetails: React.FC = () => {
  const route = useRoute<MealDetailsRoute>();
  const navigation = useNavigation<MealDetailsNavigation>();
  const dispatch = useAppDispatch();

  const { mealId } = route.params;

  const selectedMeal = useAppSelector(store => getMeal(store, mealId));
  const userFavoritesIds = useAppSelector(getFavoritesIds);

  const isMealFavorite = userFavoritesIds.includes(mealId);

  const handleStarPress = debounce(async () => {
    if (isMealFavorite) {
      await dispatch(removeFavorite({ mealId }));
      Toast.show("Removed from favorites");
    } else {
      await dispatch(addFavorite({ mealId }));
      Toast.show("Added to favorites");
    }

    // to imitate getting a data from server
    dispatch(fetchFavorites());
  }, 300);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          icon={isMealFavorite ? "star" : "staro"}
          color={theme.colors.light}
          onPress={handleStarPress}
        />
      ),
    });
  }, [navigation, isMealFavorite]);

  // RootSiblingParent needs to be here to overflow iOS modal
  return (
    <RootSiblingParent>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealBaseInfo
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          textStyle={styles.detailsText}
        />
        <View style={styles.outerListContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </RootSiblingParent>
  );
};

export { MealDetails };

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: theme.colors.dark,
  },
  detailsText: {
    color: theme.colors.dark,
  },
  outerListContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  listContainer: {
    width: "80%",
  },
});
