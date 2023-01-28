import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

import { Category } from "@typings/categories";
import { theme } from "@consts/theme";

interface Props extends Category {
  onPress: () => void;
}

const CategoryTile: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: theme.colors.light }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          <Text style={[styles.text]}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export { CategoryTile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 160,
    elevation: 4,
    backgroundColor: theme.colors.light,
    borderRadius: 8,
    shadowColor: theme.colors.dark,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
