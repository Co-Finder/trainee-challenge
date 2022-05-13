import React from "react";
import { View, Text } from "react-native";

import data from "../../data/data.json"
import styles from "./style"

// const produtos = [
//    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza' },
//    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
//    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento' },
//    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento' },
//    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento' },
// ]


const ReceitasDrink = data.recipes.filter(recipes => recipes.recipeType === "Drink");
const ReceitasFood = data.recipes.filter(recipes => recipes.recipeType === "Food");
console.log(ReceitasDrink)
console.log(ReceitasFood)

export default function RecipeDetails() {

  return (

    <View style={styles.container}>
      <Text>Detalhe das Receitas</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing elit, sed do eiusmod tempor incididunt ut</Text>
    </View>
  );
}
