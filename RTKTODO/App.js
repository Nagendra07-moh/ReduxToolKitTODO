import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./component/ToDo";
import { Provider } from "react-redux";
import store from "../RTKTODO/src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Todo />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
