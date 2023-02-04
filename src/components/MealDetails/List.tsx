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
  border-radius: ${props => props.theme.borders.radius.base};
  padding: ${props =>
    `${props.theme.margins.half} ${props.theme.margins.base}`};
  margin: ${props => `${props.theme.margins.half} ${props.theme.margins.base}`};
  background-color: ${props => props.theme.colors.yellow};
`;

const ItemText = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.dark};
`;
