import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, View } from "react-native";
import Like from './src/Components/Like'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        
        <Like />
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
