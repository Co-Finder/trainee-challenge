import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";



export default function PhotoProfile() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 11,
          }}
          source={{uri: 'https://github.com/Mar-io20.png'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  RecipeCard: {},
});