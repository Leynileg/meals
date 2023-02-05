import React from "react";
import { FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { MealsOverviewNavigation } from "@typings/navigation.stack";

import { STACK_SCREEN_NAME } from "@consts/navigation";

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
      <Container>
        <Text>It's empty ¯\_(ツ)_/¯</Text>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        ListHeaderComponentStyle={{ elevation: 0.1, zIndex: 1 }}
        style={{ width: "100%" }}
        data={favoriteMeals}
        extraData={favoriteMeals}
        keyExtractor={item => item.id}
        numColumns={1}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <MealTile
            {...item}
            onPress={() =>
              navigation.push(STACK_SCREEN_NAME.MEAL_DETAILS, {
                mealId: item.id
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

const Divider = styled.View`
  height: 10px;
`;
