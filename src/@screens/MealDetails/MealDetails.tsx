import React from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";
import debounce from "lodash.debounce";
import { useTheme } from "styled-components/native";

import {
  MealDetailsRoute,
  MealDetailsNavigation
} from "@typings/navigation.stack";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  addFavorite,
  fetchFavorites,
  getFavoritesIds,
  removeFavorite
} from "@store/favorites";
import { getMealById } from "@store/meals";

import { MealBaseInfo } from "@components/MealBaseInfo";
import { Subtitle, List } from "@components/MealDetails";
import { IconButton } from "@components/IconButton";

import {
  Image,
  Title,
  OuterListContainer,
  ListContainer
} from "./MealDetails.styles";

const MealDetails: React.FC = () => {
  const route = useRoute<MealDetailsRoute>();
  const navigation = useNavigation<MealDetailsNavigation>();
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { mealId } = route.params;

  const selectedMeal = useAppSelector(store => getMealById(store, mealId));
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

    dispatch(fetchFavorites());
  }, 300);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          icon={isMealFavorite ? "star" : "staro"}
          color={theme.colors.dark}
          onPress={handleStarPress}
        />
      )
    });
  }, [navigation, isMealFavorite]);

  // RootSiblingParent needs to be here to overflow iOS modal
  return (
    <RootSiblingParent>
      <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} />
        <Title>{selectedMeal.title}</Title>
        <MealBaseInfo
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
        />
        <OuterListContainer>
          <ListContainer>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </ListContainer>
        </OuterListContainer>
      </ScrollView>
    </RootSiblingParent>
  );
};

export { MealDetails };
