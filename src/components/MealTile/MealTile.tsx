import { View } from "react-native";
import { useTheme } from "styled-components/native";

import { Meal } from "@typings/meals";

import { MealBaseInfo } from "@components/MealBaseInfo";

import { Container, Button, MealImage, Title, styles } from "./MealTile.styles";

interface Props extends Meal {
  onPress: () => void;
}

const MealTile: React.FC<Props> = props => {
  const theme = useTheme();

  return (
    <Container>
      <Button
        style={({ pressed }) => pressed && styles.buttonPressed}
        android_ripple={{ color: theme.colors.light }}
        onPress={props.onPress}
      >
        <View>
          <MealImage source={{ uri: props.imageUrl }} resizeMode="cover" />
          <Title>{props.title}</Title>
        </View>
        <MealBaseInfo
          affordability={props.affordability}
          complexity={props.complexity}
          duration={props.duration}
          textStyle={styles.baseInfo}
        />
      </Button>
    </Container>
  );
};

export { MealTile };
