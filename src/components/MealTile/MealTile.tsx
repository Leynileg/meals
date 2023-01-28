import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  Image,
} from "react-native";

import { Meal } from "@typings/meals";

import { MealBaseInfo } from "@components/MealBaseInfo";
import { theme } from "@consts/theme";

interface Props extends Meal {
  onPress: () => void;
}

const MealTile: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: theme.colors.light }}
        onPress={props.onPress}
      >
        <View>
          <Image
            style={styles.image}
            source={{ uri: props.imageUrl }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <MealBaseInfo
          affordability={props.affordability}
          complexity={props.complexity}
          duration={props.duration}
          textStyle={styles.baseInfo}
        />
      </Pressable>
    </View>
  );
};

export { MealTile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: theme.colors.light,
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
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  baseInfo: {
    marginBottom: 8,
    fontWeight: "700",
  },
});
