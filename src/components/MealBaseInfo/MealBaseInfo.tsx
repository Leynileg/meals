import React from "react";
import { ViewStyle } from "react-native";
import styled from "styled-components/native";

import { Meal } from "@typings/meals";
import { useTranslation } from "react-i18next";

type PropsFromMeal = Pick<Meal, "duration" | "complexity" | "affordability">;

interface Props extends PropsFromMeal {
  style?: ViewStyle;
}

const MealBaseInfo: React.FC<Props> = props => {
  const { t } = useTranslation("generic");

  return (
    <Details style={[props.style]}>
      <DetailsItem>
        {t("of_minutes", {
          amount: props.duration,
          defaultValue: "generic.of_minutes"
        })}
      </DetailsItem>
      <DetailsItem>{props.complexity.toUpperCase()}</DetailsItem>
      <DetailsItem>{props.affordability.toUpperCase()}</DetailsItem>
    </Details>
  );
};

export { MealBaseInfo };

const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: ${props => props.theme.margins.base};
  padding-horizontal: ${props => props.theme.margins.base_x2};
`;

const DetailsItem = styled.Text`
  margin: ${props =>
    `0 ${props.theme.margins.half} ${props.theme.margins.half}`};
  background: ${props => props.theme.colors.orange};
  overflow: hidden;
  padding-horizontal: ${props => props.theme.margins.base_x2};
  padding-vertical: ${props => props.theme.margins.half};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.sizes.xs};
  border-radius: ${props => props.theme.borders.radius.half};
`;
