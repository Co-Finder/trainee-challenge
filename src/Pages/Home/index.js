import React, { useState } from "react";
import { SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import styles from "./styles";
import ButtonCategory from "../../Components/ButtonCategory";


export default function Home() {
  const [searchRecipes, setSearch] = useState();

  const entrar = () => {
    console.log("Pesquisou");
    console.log(searchRecipes);
  };

  const signIg = () => {
    alert("Ainda não temos postagens")
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Recipe"
          onChangeText={(value) => setSearch(value)}
        />
      <Text>Category</Text>
      <ButtonCategory labelButton="All" onpress={signIg}/>

      </SafeAreaView>
    </ScrollView>
  );
}
