import React, { useState } from "react";
import { SafeAreaView, View, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";
import RecipesCard from "../../Components/RecipesCard";

import data from "../../data/data.json"

export default function HomeScreen() {
  const [searchRecipes, setSearch] = useState();

  const recipeType = () => {
    alert("We don't have any posts yet");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Recipe"
        onChangeText={(value) => setSearch(value)}
      />
      <View style={styles.containeCategry}>
        <TextTitle labelButton="Category" />
        <View style={styles.containeRow}>
          <ButtonCategory labelButton="All" onpress={recipeType} />
          <ButtonCategory labelButton="Food" onpress={recipeType} />
          <ButtonCategory labelButton="Drink" onpress={recipeType} />
          <ButtonCategory labelButton="candy" onpress={recipeType} />
        </View>
      </View>
      <Spacing />
      <ScrollView >
        <View style={styles.containerFavorites}>
          <TextTitle labelButton="Recipes" />
        </View>
        <View style={styles.containeCardRecipes}>
          {
            data.recipes.map((item, index) => {
              console.log(item)
              return (
                <View style={styles.containeRow}>
                  <RecipesCard
                    imagePost={item.recipeImageUrl}
                    userProfileImageUrl={item.userProfileImageUrl}
                    userProfileName={item.userProfileName}
                    recipeTitle={item.recipeTitle}
                    recipeType={item.recipeType}
                    recipeIngredients={item.recipeIngredients} />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
