import React, { useState } from "react";
import { SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import styles from "./styles";
import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";

export default function Home() {
  const [searchRecipes, setSearch] = useState();

  const entrar = () => {
    console.log("Pesquisou");
    console.log(searchRecipes);
  };

  const signIg = () => {
    alert("Ainda não temos postagens");
  };

  return (
    <ScrollView>
     
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
          </View>
        </View>
        <Spacing />
      <SafeAreaView style={styles.containerRecipes}>
        <TextTitle labelButton="Recipes" />

      

      </SafeAreaView>
    </ScrollView>
  );
}
