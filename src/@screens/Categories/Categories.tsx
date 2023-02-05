import { FlatList, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

import { Category } from "@typings/categories";
import { CategoriesNavigation } from "@typings/navigation.stack";

import { STACK_SCREEN_NAME } from "@consts/navigation";

import { CategoryTile } from "@components/CategoryTile";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchCategories, getCategories } from "@store/categories";

import { Loading } from "@components/Loading";

interface ListItem {
  item: Category;
}

const Categories: React.FC = () => {
  const navigation = useNavigation<CategoriesNavigation>();
  const dispatch = useAppDispatch();

  const categories = useAppSelector(getCategories);

  React.useEffect(() => {
    if (categories.length) return;

    dispatch(fetchCategories());
  }, [categories]);

  if (!categories.length) {
    return <Loading />;
  }

  return (
    <Container>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }: ListItem) => (
          <CategoryTile
            key={item.id}
            color={item.color}
            id={item.id}
            title={item.title}
            onPress={() =>
              navigation.navigate(STACK_SCREEN_NAME.MEALS_OVERVIEW, {
                categoryId: item.id
              })
            }
          />
        )}
      />
    </Container>
  );
};

export { Categories };

const Container = styled.View`
  flex: 1;
  padding-top: ${props =>
    Platform.OS === "android"
      ? props.theme.margins.base_x3
      : props.theme.margins.base};
`;
