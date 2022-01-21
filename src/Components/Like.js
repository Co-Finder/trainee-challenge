import React from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";



export default function Like() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 31,
            height: 31,
            borderRadius: 11,
          }}
          source={require("../Img/profile-picture-man-little.png")}
        />
        <Text>Calum Lewis</Text>
      </View>
      <View>
        <Image
          style={{
            width: 151,
            height: 151,
            borderRadius: 11,
          }}
          source={require("../Img/photo-pancake2-medium.png")}
        />
        <View>
          <Ionicons name="ios-heart-outline" size={24} color="black" />
          <Ionicons name="ios-heart" size={24} color="black" />
        </View>
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
