import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeLike } from "../../redux/likeSlice";
import * as Notifications from 'expo-notifications';
import styles from "./styles";

import data from "../../data/data.json"

import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";
import RecipesCard from "../../Components/RecipesCard";
import Like from "../../Components/Like";
import ReceitaButton from "../../routes/ReceitaButton";
import AppTabsScreen from "../../Components/TypeRecipe/recipeTypeAll";
import ViewTabsType from "../../Components/TypeRecipe/recipeTypeAll";
import ContainerNavigation from "../../Components/TypeRecipe/recipeTypeAll";
import RecipeTypeAll from "../../Components/TypeRecipe/recipeTypeAll";
import RecipeTypeFood from "../../Components/TypeRecipe/recipeTypeAll";
import RecipeTypeDrink from "../../Components/TypeRecipe/recipeTypeAll";
import RecipeTypeCandy from "../../Components/TypeRecipe/recipeTypeAll";


export default function HomeScreen() {

  const [like, setlike] = useState(false);
  const dispatch = useDispatch();

  const addLiked = (like = false) => {
    (e) => setName(e.target.value)
    dispatch(changeLike(like = !like));
  }
  const removeLiked = () => {
    (e) => setName(e.target.value)
    dispatch(changeLike(like = !like));
  }

  // const recipeType = () => {
  //   return (
  //   <RecipeTypeAll></RecipeTypeAll>
  //   )
  // };

  // 
  const ReceitasDrink = data.recipes.filter(recipes => recipes.recipeType === "Drink");
  const ReceitasFood = data.recipes.filter(recipes => recipes.recipeType === "Food");
  //

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
          <ButtonCategory labelButton="All" onpress={ContainerNavigation} />
          <ButtonCategory labelButton="Food" onpress={ContainerNavigation} />
          <ButtonCategory labelButton="Drink" onpress={ContainerNavigation} />
          <ButtonCategory labelButton="candy" onpress={ContainerNavigation} />
        </View>
      </View>
      <Spacing />
      <ScrollView >
        <View style={styles.containerFavorites}>
          <TextTitle labelButton="Recipes" />
        </View>
        <RecipeTypeAll />
        {/* <RecipeTypeFood /> */}
        {/* <RecipeTypeDrink /> */}
        {/* <RecipeTypeCandy /> */}
      </ScrollView>
    </SafeAreaView >
  );
}

// {
//   data.recipes.map((props, index) => {
//     console.log();
//     return (
//       <View style={styles.containeRow} key={props._id}>
//         <TouchableOpacity>
//           <RecipesCard
//             key={index}
//             imagePost={props.recipeImageUrl}
//             userProfileImageUrl={props.userProfileImageUrl}
//             userProfileName={props.userProfileName}
//             recipeTitle={props.recipeTitle}
//             recipeType={props.recipeType}
//             recipeIngredients={props.recipeIngredients} />
//         </TouchableOpacity>
//         { }
//         {
//           like === true ? (
//             <View style={styles.Like}>
//               <Like onClick={addLiked} />
//             </View>
//           ) : (
//             <View style={styles.Like}>
//               <Like onClick={removeLiked} />
//             </View>
//           )
//         }
//       </View>
//     )
//   })
// }