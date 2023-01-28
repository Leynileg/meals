import { StyleSheet, View, FlatList, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Category } from "@typings/categories";
import { CategoriesNavigation } from "@typings/navigation.stack";

import { STACK_SCREEN_NAME } from "@consts/navigation";

import { CategoryTile } from "@components/CategoryTile";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchCategories, getCategories } from "@store/categories";

import { Loading } from "@components/Loading";
import { theme } from "@consts/theme";

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
    <View style={styles.root}>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }: { item: Category }) => (
          <CategoryTile
            key={item.id}
            color={item.color}
            id={item.id}
            title={item.title}
            onPress={() =>
              navigation.navigate(STACK_SCREEN_NAME.MEALS_OVERVIEW, {
                categoryId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export { Categories };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? theme.margins.base_x3 : 0,
  },
});
