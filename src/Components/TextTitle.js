import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextTitle = ({ labelButton, onpress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{labelButton}</Text>
    </View>
  );
};

export default TextTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3E5481",
  },
});
