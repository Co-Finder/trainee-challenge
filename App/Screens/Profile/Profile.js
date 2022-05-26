import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Button } from "react-native";
import firebase from '../../config/firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";

import TextTitle from "../../Components/TextTitle"
import Spacing from "../../Components/Spacing"
import RecipesCard from "../../Components/RecipesCard"

import data from "../../data/data.json"
import Like from "../../Components/Like";


export default function Profile({ navigation }) {

  const HomeScreen = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "AppDrawerScreen" }],
    });
  };
  const getOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  function logOutFirebase() {
    firebase.auth().signOut().then(function () {
      getOut()
    })
  };
  const addLiked = () => {
    (e) => setlike(e.target.value)
    console.log("clicado")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <TouchableOpacity onPress={() => { logOutFirebase() }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name="chevron-left" color={'#000'} size={35} onPress={() => { HomeScreen() }} />
      </TouchableOpacity>
      <View style={styles.profileStyle}>
        <Image style={styles.photoProfile} source={require("../../Img/Avatar.png")} />
        <TextTitle labelButton="Choirul Syafril" />
      </View>

      <Spacing />


      <ScrollView >
        <View style={styles.containerFavorites}>
          <TextTitle labelButton="Favorite Recipes" />
        </View>
        <View style={styles.recipesContainer}>
          {
            data.recipes.filter(recipes => recipes.isLiked === true)
            .map((item, index) => {
            console.log(index)
              return (
          <View key={item._id}>
            <TouchableOpacity>
              <RecipesCard
                imagePost={item.recipeImageUrl}
                userProfileImageUrl={item.userProfileImageUrl}
                userProfileName={item.userProfileName}
                recipeTitle={item.recipeTitle}
                recipeType={item.recipeType}
                recipeIngredients={item.recipeIngredients}
              />
            </TouchableOpacity>
            <View style={styles.Like}>
              <Like onClick={addLiked} />
            </View>
          </View>
          )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}
