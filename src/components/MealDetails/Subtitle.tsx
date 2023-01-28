import { theme } from "@consts/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Subtitle: React.FC<Props> = props => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
    </View>
  );
};

export { Subtitle };

const styles = StyleSheet.create({
  subTitleContainer: {
    marginVertical: 8,
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: theme.colors.orange,
    borderBottomWidth: 2,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: theme.colors.orange,
    textAlign: "center",
  },
});
