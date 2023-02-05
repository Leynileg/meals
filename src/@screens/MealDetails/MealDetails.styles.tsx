import styled from "styled-components/native";

import { dp } from "@services/Dp";

const Image = styled.Image`
  width: 100%;
  height: ${dp(100)};
`;

const Title = styled.Text`
  margin: ${props => props.theme.margins.base};
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fonts.sizes.lg};
  font-weight: ${props => props.theme.fonts.weights.bold};
  text-align: center;
`;

const OuterListContainer = styled.View`
  margin-bottom: ${props => props.theme.margins.base_x4};
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.View`
  width: 80%;
`;

export { Image, Title, OuterListContainer, ListContainer };
