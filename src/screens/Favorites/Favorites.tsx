import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";

import { MealsOverviewNavigation } from "typings/navigation.stack";

import { STACK_SCREEN_NAME } from "consts/navigation";

import { MealTile } from "components/MealTile";

import { getFavorites } from "store/favorites";
import { useAppSelector } from "store/hooks";

const Favorites: React.FC = () => {
  const navigation = useNavigation<MealsOverviewNavigation>();
  const favoriteMeals = useAppSelector(getFavorites);
  const { t } = useTranslation("favorites");

  // it's impossible to have mealsIdsList without mealsList
  // so there's no need for a loading screen here
  if (!favoriteMeals.length) {
    return (
      <Container>
        <EmptyText>{t("favorites_empty_title")}</EmptyText>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        style={styles.flatList}
        data={favoriteMeals}
        extraData={favoriteMeals}
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
    </Container>
  );
};

export { Favorites };

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.margins.base_x3};
`;

const EmptyText = styled.Text`
  font-size: ${props => props.theme.fonts.sizes.lg};
`;

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
});
