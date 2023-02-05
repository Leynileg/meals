import { useTheme } from "styled-components/native";

import { Category } from "typings/categories";

import {
  Button,
  Container,
  InnerContainer,
  styles,
  Title,
} from "./CategoryTile.styles";

interface Props extends Category {
  onPress: () => void;
}

const CategoryTile: React.FC<Props> = props => {
  const theme = useTheme();

  return (
    <Container>
      <Button
        android_ripple={{ color: theme.colors.light }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={props.onPress}
      >
        <InnerContainer background={props.color}>
          <Title>{props.title}</Title>
        </InnerContainer>
      </Button>
    </Container>
  );
};

export { CategoryTile };
