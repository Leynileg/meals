import styled from "styled-components/native";

import { scale } from "services/scale";

const Image = styled.Image`
  width: 100%;
  height: ${scale(150)};
`;

const Title = styled.Text`
  margin: ${props => props.theme.margins.base};
  color: ${props => props.theme.colors.dark};
  /* font-size: ${props => props.theme.fonts.sizes.lg}; */
  font-size: 30px;
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
