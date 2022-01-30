import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TextTitle from "./TextTitle";

const URL = "../Img/profile-picture-man-little.png"
const imagePost = "../Img/photo-salad-medium.png"

export default function RecipesCard() {
  return (
    <View style={styles.containerRecipesCards}>
      <View style={styles.postTitle}>
        <Image
          style={styles.imageProfile}
          source={require(URL)}
        />
        <Text style={styles.nameProfile}>Calum Lewis</Text>
      </View>

      <Image
        style={styles.imagePost}
        source={require(imagePost)}
      />
      {/* <Like style={styles.like}/> */}
      <TextTitle labelButton="Pancake" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRecipesCards: {
    margin: 24,
    marginLeft: 10,
    marginRight: 10,
  },
  postTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  nameProfile: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#3E5481",
  },
  imageProfile: {
    borderRadius: 11,
    marginRight: 9,
  },
  imagePost: {
    borderRadius: 16,
    marginBottom: 23,
  },
  like: {
    margin: 33,
    position: "absolute",
  },
});
