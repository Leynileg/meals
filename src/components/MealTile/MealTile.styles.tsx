import { Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { dp } from "@services/Dp";

const Container = styled.View`
  flex: 1;
  margin: ${props => props.theme.margins.base};
  border-radius: ${props => props.theme.borders.radius.base};
  elevation: 4;
  background-color: ${props => props.theme.colors.light};
  shadow-color: ${props => props.theme.colors.dark};
  shadow-opacity: 0.25;
  shadow-offset: 0px 2px;
  overflow: ${Platform.OS === "android" ? "hidden" : "visible"};
`;

const Button = styled.Pressable`
  flex: 1;
  justify-content: center;
`;

const MealImage = styled.Image`
  flex: 1;
  width: 100%;
  height: ${dp(80)};
  border-top-left-radius: ${props => props.theme.borders.radius.base};
  border-top-right-radius: ${props => props.theme.borders.radius.base};
`;

const Title = styled.Text`
  flex: 1;
  font-weight: ${props => props.theme.fonts.weights.bold};
  text-align: center;
  font-size: ${props => props.theme.fonts.sizes.xl};
  margin: ${props => props.theme.margins.base};
`;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75
  },
  baseInfo: {
    fontWeight: "700"
  }
});

export { Container, Button, MealImage, Title, styles };
