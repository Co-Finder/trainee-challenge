import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcon } from "./Icon";
import colors from "../config/colors";
import AppText from "../components/AppText";

const { width } = Dimensions.get("screen");
const CardWidth = width / 2 - 20;

export default function RecipesCard({
  profileName,
  foodImg,
  profileImg,
  foodTitle,
  category,
  weight,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.containerRecipesCards}>
        <View style={styles.profileContainer}>
          <Image style={styles.imageProfile} source={profileImg} />
          <AppText style={styles.nameProfile}>{profileName}</AppText>
        </View>
        <Image resizeMode="cover" style={styles.image} source={foodImg} />
        <View style={styles.like}>
          <MaterialIcon color={colors.white} size={"large"} name={"heart"} />
        </View>
        <AppText style={styles.foodTitle}>{foodTitle}</AppText>
        <View style={styles.categoryContainer}>
          <AppText style={styles.text}>{category}</AppText>
          <View style={styles.dot} />
          <AppText style={styles.text}>{weight}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerRecipesCards: {
    height: 250,
    width: CardWidth,
    marginBottom: 20,
    position: "relative",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  nameProfile: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#3E5481",
    marginLeft: 10,
  },
  imageProfile: {
    borderRadius: 11,
  },
  image: {
    borderRadius: 16,
    width: "100%",
    height: 150,
  },
  like: {
    position: "absolute",
    top: 70,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  foodTitle: {
    fontWeight: "bold",
    marginTop: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    alignItems: "center",
  },
  text: {
    color: colors.greyLight,
    fontSize: 16,
  },
  dot: {
    borderRadius: 50,
    backgroundColor: colors.greyLight,
    height: 5,
    width: 5,
  },
});
