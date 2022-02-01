import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TextTitle from "./TextTitle";

export default function RecipesCard({ imagePost, userProfileImageUrl, userProfileName }) {
  return (
    <View style={styles.containerRecipesCards}>
      <View style={styles.postTitle}>
        <Image style={styles.imageProfile} source={{ uri: userProfileImageUrl }} />
        <Text style={styles.nameProfile}>{ userProfileName }</Text>
      </View>

      <Image style={styles.imagePost} source={{ uri: imagePost }} />
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
    width: 24,
    height: 24,
    borderRadius: 11,
    marginRight: 9,
  },
  imagePost: {
    width: 150,
    height: 150,
    borderRadius: 16,
    marginBottom: 23,
  },
  like: {
    margin: 33,
    position: "absolute",
  },
});
