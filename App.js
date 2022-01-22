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
import Home from "./src/Pages/Home"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
