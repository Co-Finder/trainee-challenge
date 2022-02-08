import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";

export default function PhotoProfile({userProfileImageUrl}) {
  return (
    <View style={styles.container}>
        <Image style={styles.imageProfile} source={{ uri: userProfileImageUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageProfile:{
    width: 48,
    height: 48,
    borderRadius: 24,
  },  

});