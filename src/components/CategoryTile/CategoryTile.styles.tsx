import { Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { dp } from "@services/Dp";

const Container = styled.View`
  flex: 1;
  margin: ${props => props.theme.margins.half};
  height: ${dp(90)};
  overflow: ${Platform.OS === "android" ? "hidden" : "visible"};
  elevation: 4;
  background-color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borders.radius.base};
  shadow-color: ${props => props.theme.colors.dark};
  shadow-opacity: 0.25;
  shadow-offset: 0px 2px;
  shadow-radius: ${props => props.theme.borders.radius.base};
`;

const Button = styled.Pressable`
  flex: 1;
`;

const InnerContainer = styled.View<{ background: string }>`
  flex: 1;
  padding: ${props => props.theme.margins.base};
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.borders.radius.base};
  background-color: ${props => props.background};
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fonts.sizes.base_x2};
  font-weight: ${props => props.theme.fonts.weights.bold};
`;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75
  }
});

export { Container, Button, InnerContainer, Title, styles };
