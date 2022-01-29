import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";

const RecipeDetails = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.imgBox}></View>
      <View style={styles.RecipeDetails}>
        
      </View>
    </Screen>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imgBox: {},
  RecipeDetails: {},
});
