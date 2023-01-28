import { theme } from "@consts/theme";
import { Meal } from "@typings/meals";
import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type PropsFromMeal = Pick<Meal, "duration" | "complexity" | "affordability">;

interface Props extends PropsFromMeal {
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MealBaseInfo: React.FC<Props> = props => {
  return (
    <View style={[styles.details, props.style]}>
      <Text style={[styles.detailsItem, props.textStyle]}>
        {props.duration}m
      </Text>
      <Text style={[styles.detailsItem, props.textStyle]}>
        {props.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, props.textStyle]}>
        {props.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export { MealBaseInfo };

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 12,
    marginBottom: 8,
    fontSize: 12,
    color: theme.colors.orange,
  },
});
