import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeLike } from "../../redux/likeSlice";
import styles from "./styles";

import data from "../../data/data.json"

import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";
import ContainerNavigation from "../../Components/TypeRecipe/recipeTypeAll";
import RecipeTypeAll from "../../Components/TypeRecipe/recipeTypeAll";

import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
} from 'expo-ads-admob';


export default function HomeScreen() {

  useEffect(()=>{
    async function loadAd(){
      AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
      InterstitialAd();
    }

    loadAd();
  },[]);

  async function InterstitialAd() {
    await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

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
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          setTestDeviceIDAsync
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={ (error) => {console.log(error);}} />
      </ScrollView>
    </SafeAreaView >
  );
}

