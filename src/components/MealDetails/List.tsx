import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

interface Props {
  data: string[];
}

const List: React.FC<Props> = props => {
  return (
    <View>
      {props.data.map(item => (
        <ListItem key={item}>
          <ItemText>{item}</ItemText>
        </ListItem>
      ))}
    </View>
  );
};

export { List };

const ListItem = styled.View`
  padding-bottom: ${props => props.theme.margins.half};
  margin-bottom: ${props => props.theme.margins.base_x2};
  margin-horizontal: ${props => props.theme.margins.base};
  border-bottom-color: ${props => props.theme.colors.dark};
  border-bottom-width: 0.5px;
`;

const ItemText = styled.Text`
  color: ${props => props.theme.colors.dark};
`;
