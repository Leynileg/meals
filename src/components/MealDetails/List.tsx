import { theme } from "@consts/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  data: string[];
}

const List: React.FC<Props> = props => {
  return (
    <View>
      {props.data.map(item => (
        <View style={styles.listItem} key={item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export { List };

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: theme.colors.yellow,
  },
  itemText: {
    color: theme.colors.dark,
    textAlign: "center",
  },
});
