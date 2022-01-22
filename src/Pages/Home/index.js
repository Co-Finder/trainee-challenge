import React, { useState } from "react";
import { SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import styles from "./styles";

export default function Home() {
  const [searchRecipes, setSearch] = useState();

  const entrar = () => {
    console.log("Pesquisou");
    console.log(searchRecipes);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Rearch Recipes"
          keyboardType="text"
          onChangeText={(value) => setSearch(value)}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
