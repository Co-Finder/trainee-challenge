import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Login from "./src/Pages/Login/index";
import Home from "./src/Pages/Home";
import Notifications from "./src/Pages/Notifications";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
