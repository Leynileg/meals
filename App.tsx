import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";

import { store } from "./src/store/store";
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <SafeAreaView style={styles.root}>
          <Navigation />
        </SafeAreaView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
