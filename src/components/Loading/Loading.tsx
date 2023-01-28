import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { theme } from "@consts/theme";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.orange} />
    </View>
  );
};

export { Loading };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
