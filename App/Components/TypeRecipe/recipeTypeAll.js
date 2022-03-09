import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import data from "../../data/data.json"

import Like from "../Like";
import RecipesCard from "../RecipesCard";

const addLiked = (like = false) => {
  (e) => setName(e.target.value)
  dispatch(changeLike(like = !like));
  console.log("(e) => setName(e.target.value)" + like);
}

const TabsTypes = createBottomTabNavigator();

const ViewTabsType = () => (
  <TabsTypes.Navigator screenOptions={{ tabBarActiveTintColor: '#1FCC79', headerShown: false }}>
    <TabsTypes.Screen name="All" component={RecipeTypeAll} options={{
      tabBarLabel: 'All'
    }}
    />
    <TabsTypes.Screen name="Food" component={RecipeTypeFood} options={{
      tabBarLabel: 'Food',
    }}
    />
    <TabsTypes.Screen name="Drink" component={RecipeTypeDrink} options={{
      tabBarLabel: 'Drink',
    }}
    />
    <TabsTypes.Screen name="Candy" component={RecipeTypeCandy} options={{
      tabBarLabel: 'Candy',
    }}
    />

  </TabsTypes.Navigator>
);

const ContainerNavigation = () => {
  return (
  <NavigationContainer independent={true}>
    <ViewTabsType/>
  </NavigationContainer>
  )
}


const RecipeTypeAll = ({ labelButton }) => {
  return (
    <View style={styles.recipesContainer}>
      {
        data.recipes.map((item, index) => {
          console.log(index)
          return (
            <View key={item._id} className={styles.container}>
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
                {/* <Like onClick={addLiked} /> */}
              </View>
            </View>
          )
        })
      }
    </View>
  );
};

const RecipeTypeFood = ({ labelButton }) => {
  return (
    <View style={styles.recipesContainer}>
      {
        data.recipes.filter(recipes => recipes.recipeType === "Food")
          .map((item, index) => {
            console.log(index)
            return (
              <View key={item._id} className={styles.container}>
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
  );
};
const RecipeTypeDrink = ({ labelButton }) => {
  return (
    <View style={styles.recipesContainer}>
      {
        data.recipes.filter(recipes => recipes.recipeType === "Food")
          .map((item, index) => {
            console.log(index)
            return (
              <View key={item._id} className={styles.container}>
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
  );
};
const RecipeTypeCandy = ({ labelButton }) => {
  return (
    <View style={styles.recipesContainer}>
      {
        data.recipes.filter(recipes => recipes.recipeType === "Food")
          .map((item, index) => {
            console.log(index)
            return (
              <View key={item._id} className={styles.container}>
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
  );
};

export default (ContainerNavigation, RecipeTypeAll);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
