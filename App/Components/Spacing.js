import React from "react";
import { StyleSheet, View } from "react-native";

const Spacing = () => {
  return (
    <View style={styles.container} />
  );
};

export default Spacing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F5F7",
    width: "100%",
    height: 8,
    marginTop: 24,
    marginBottom: 24,
  }
});
