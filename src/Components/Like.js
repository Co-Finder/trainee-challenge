import React from "react";
import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Like() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageProfile}
        source={require(`../Img/Heart.png`)}
      />
      <Image
        style={styles.imageProfile}
        source={require(`../Img/HeartLight.png`)}
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 11,
  },
});
