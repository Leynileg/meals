import React from "react";
import styled from "styled-components/native";

import { dp } from "@services/Dp";

interface Props {
  children: React.ReactNode;
}

const Subtitle: React.FC<Props> = props => {
  return (
    <SubtitleContainer>
      <SubTitleText>{props.children}</SubTitleText>
    </SubtitleContainer>
  );
};

export { Subtitle };

const SubtitleContainer = styled.View`
  margin-horizontal: ${props => props.theme.margins.base};
  margin-vertical: ${props => props.theme.margins.base_x2};
  padding: ${props => props.theme.margins.half};
  border-bottom-color: ${props => props.theme.colors.orange};
  border-bottom-width: ${dp(1)};
`;

const SubTitleText = styled.Text`
  font-size: ${props => props.theme.fonts.sizes.base};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.orange};
  text-align: center;
`;
