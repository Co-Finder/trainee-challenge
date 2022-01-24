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

export default function HomeScreen() {
  const [searchRecipes, setSearch] = useState();

  const signIg = () => {
    alert("Ainda não temos postagens");
  };

  return (
    <ScrollView style={styles.containerScrolView}>
      <SafeAreaView style={styles.container}>
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

        <Spacing />

        <SafeAreaView>
          <TextTitle labelButton="Recipes" />
          <View style={styles.containeRow}>
            <RecipesCard URL="../Img/profile-picture-man-little.png"/>
            <RecipesCard />
          </View>
          <View style={styles.containeRow}>
            <RecipesCard />
            <RecipesCard />
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
}
