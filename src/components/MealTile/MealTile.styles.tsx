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
`;

const MealImage = styled.Image`
  width: 100%;
  height: ${dp(100)};
  border-top-left-radius: ${props => props.theme.borders.radius.base};
  border-top-right-radius: ${props => props.theme.borders.radius.base};
`;

const Title = styled.Text`
  font-weight: ${props => props.theme.fonts.weights.bold};
  text-align: center;
  font-size: ${props => props.theme.fonts.sizes.base};
  margin: ${props => props.theme.margins.base};
`;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75
  },
  baseInfo: {
    marginBottom: 8,
    fontWeight: "700"
  }
});

export { Container, Button, MealImage, Title, styles };
