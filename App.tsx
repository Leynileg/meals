import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { store } from "./src/store/store";
import { Navigation } from "./src/navigation";
import { theme } from "./src/theme/theme";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.root}>
            <Navigation />
          </SafeAreaView>
        </ThemeProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
