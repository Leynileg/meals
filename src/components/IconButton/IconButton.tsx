import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import styled, { useTheme } from "styled-components/native";

interface Props {
  icon: keyof typeof AntDesign.glyphMap;
  color?: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = props => {
  const theme = useTheme();

  return (
    <Button
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign
        name={props.icon}
        size={theme.icons.sizes.base_x3}
        color={props.color}
      />
    </Button>
  );
};

export { IconButton };

const Button = styled.Pressable`
  padding: ${props => props.theme.margins.half};
`;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  }
});
