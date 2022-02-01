import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import styles from "./styles";
import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";
import Like from "../../Components/Like";
import RecipesCard from "../../Components/RecipesCard";

import data from "./data.json"

export default function HomeScreen() {
  const [searchRecipes, setSearch] = useState();

  const signIg = () => {
    alert("Ainda não temos postagens");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Search Recipe"
          onChangeText={(value) => setSearch(value)}
        />
        <View style={styles.containeCategry}>
          <TextTitle labelButton="Category" />
          <View style={styles.containeRow}>
            <ButtonCategory labelButton="All" onpress={signIg} />
            <ButtonCategory labelButton="Food" onpress={signIg} />
            <ButtonCategory labelButton="Drink" onpress={signIg} />
            <ButtonCategory labelButton="candy" onpress={signIg} />
          </View>
        </View>
        
        <View style={styles.spacing}>
          <Spacing  />
        </View>

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
                <RecipesCard imagePost={item.recipeImageUrl} />
              </View>
            )                
          })
          }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
