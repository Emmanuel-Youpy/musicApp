import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Discover from "./screens/Discover";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Discover />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00008B",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
