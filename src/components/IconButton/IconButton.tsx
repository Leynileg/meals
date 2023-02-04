import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface Props {
  icon: keyof typeof AntDesign.glyphMap;
  color?: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = props => {
  return (
    <Button
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={props.icon} size={24} color={props.color} />
    </Button>
  );
};

export { IconButton };

const Button = styled.Pressable`
  padding: ${props => props.theme.margins.base};
`;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  }
});
