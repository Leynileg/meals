import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  icon: keyof typeof AntDesign.glyphMap;
  color?: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
    >
      <AntDesign name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
};

export { IconButton };

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
