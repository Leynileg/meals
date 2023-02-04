import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { Meal } from "@typings/meals";

type PropsFromMeal = Pick<Meal, "duration" | "complexity" | "affordability">;

interface Props extends PropsFromMeal {
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MealBaseInfo: React.FC<Props> = props => {
  return (
    <Details style={[props.style]}>
      <DetailsItem style={[props.textStyle]}>{props.duration}m</DetailsItem>
      <DetailsItem style={[props.textStyle]}>
        {props.complexity.toUpperCase()}
      </DetailsItem>
      <DetailsItem style={[props.textStyle]}>
        {props.affordability.toUpperCase()}
      </DetailsItem>
    </Details>
  );
};

export { MealBaseInfo };

const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.margins.base};
`;

const DetailsItem = styled.Text`
  margin: ${props =>
    `0 ${props.theme.margins.base} ${props.theme.margins.base}`};
  font-size: ${props => props.theme.fonts.sizes.base};
  color: ${props => props.theme.colors.orange};
`;
