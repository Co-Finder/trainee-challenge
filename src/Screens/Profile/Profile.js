import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import firebase from '../../config/firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";

import TextTitle from "../../Components/TextTitle"
import Spacing from "../../Components/Spacing"
import RecipesCard from "../../Components/RecipesCard"

import data from "../Home/data.json"

export default function Profile({ navigation}) {
  
  const HomeScreen = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Main" }],
    });
  };
  const getOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      getOut()
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <TouchableOpacity onPress={()=>{ logOutFirebase()}}>
          <Text>LogOut</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name="chevron-left" color={'#000'} size={35} onPress={()=>{HomeScreen()}} />
      </TouchableOpacity>
      <View style={styles.profileStyle}>
        <Image style={styles.photoProfile} source={require("../../Img/Avatar.png")}/>
        <TextTitle labelButton="Choirul Syafril" />
      </View>
      
      <Spacing />
        
      <ScrollView >
        <View style={styles.containerFavorites}>
          <TextTitle labelButton="Favorite Recipes" />
        </View>
        <View style={styles.recipesContainer}>
        {
            data.recipes.map((item, index) => {
              console.log(item)
              return (
              <View>
                <RecipesCard imagePost={item.recipeImageUrl} userProfileImageUrl={item.userProfileImageUrl} userProfileName={item.userProfileName} />
              </View>
            )
          })
          }
        </View>
      </ScrollView>
    </View>
  );
}
