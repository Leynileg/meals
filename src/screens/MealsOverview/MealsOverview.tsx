import React from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import {
  MealsOverviewNavigation,
  MealsOverviewRoute,
} from "typings/navigation.stack";

import { MealTile } from "components/MealTile";
import { Loading } from "components/Loading";

import { STACK_SCREEN_NAME } from "consts/navigation";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMeals, getCategoryMeals } from "store/meals";
import { getCategoryById } from "store/categories";

const MealsOverview: React.FC = () => {
  const route = useRoute<MealsOverviewRoute>();
  const navigation = useNavigation<MealsOverviewNavigation>();
  const dispatch = useAppDispatch();

  const categoryId = route.params.categoryId;

  const mealsList = useAppSelector(store =>
    getCategoryMeals(store, categoryId),
  );
  const selectedCategory = useAppSelector(store =>
    getCategoryById(store, categoryId),
  );

  React.useEffect(() => {
    if (mealsList.length) return;

    dispatch(fetchMeals({ categoryId }));
  }, [mealsList]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: selectedCategory?.title });
  }, []);

  if (!mealsList.length) {
    return <Loading />;
  }

  return (
    <Container>
      <FlatList
        data={mealsList}
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

export { MealsOverview };

const Container = styled.View`
  flex: 1;
  padding-top: ${props => props.theme.margins.base_x2};
`;
