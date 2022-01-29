import { Image, StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import RecipesCard from "../../components/RecipieCard";

const RecipieDetailsData = [
  {
    profileImg: require(`../../assets/profile1.png`),
    profileName: "Calum Lewis",
    foodImg: require(`../../assets/food1.png`),
    foodName: "Pancake",
    category: "food",
    weight: "10g",
  },
  {
    profileImg: require(`../../assets/profile2.png`),
    profileName: "Calum Lewis",
    foodImg: require(`../../assets/food2.png`),
    foodName: "Pancake",
    category: "food",
    weight: "10g",
  },
  {
    profileImg: require(`../../assets/profile2.png`),
    profileName: "Calum Lewis",
    foodImg: require(`../../assets/food2.png`),
    foodName: "Pancake",
    category: "food",
    weight: "10g",
  },
  {
    profileImg: require(`../../assets/profile2.png`),
    profileName: "Calum Lewis",
    foodImg: require(`../../assets/food2.png`),
    foodName: "Pancake",
    category: "food",
    weight: "10g",
  },
];

const Notification = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../../assets/Avatar.png")} style={styles.img} />
        <AppText style={styles.text}>Choirul Syafril</AppText>
      </View>
      <View style={styles.favouriteRecipes}>
        <AppText style={styles.recipies}>Favorite Recipes</AppText>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={RecipieDetailsData}
          // contentContainerStyle={styles.categoryContainer}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          renderItem={({ item, index }) => (
            <RecipesCard
              foodImg={item.foodImg}
              foodTitle={item.foodName}
              profileImg={item.profileImg}
              profileName={item.profileName}
              category={item.category}
              weight={item.weight}
            />
          )}
          keyExtractor={(item, index) => index * Math.random(55)}
        />
      </View>
    </Screen>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 150,
    width: 150,
  },
  text: {
    fontWeight: "bold",
    marginTop: 30,
  },
  favouriteRecipes: {
    flex: 2,
  },
  recipies: {
    fontWeight: "900",
    marginVertical: 20,
    fontSize: 22,
  },
});
