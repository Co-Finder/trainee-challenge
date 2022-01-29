import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import SearchBar from "../../components/SearchBar";
import RecipesCard from "../../components/RecipieCard";
import CategoryList from "../../components/categoryList";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const categoryData = [
  { id: 1, title: "All" },
  { id: 2, title: "Food" },
  { id: 3, title: "Drink" },
];
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

const Home = () => {
  const [activeKey, setActiveKey] = useState("All");

  const handleActive = (key) => {
    setActiveKey(key);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.filterContainer}>
        <SearchBar placeholder={"pancake"} />
        <View style={styles.categoryList}>
          <AppText style={styles.text}>Category</AppText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoryList
                title={item.title}
                onPress={() => handleActive(`${item.title}`)}
                active={activeKey}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <AppText style={styles.recipies}>Recipes</AppText>
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

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.greySecondary,
  },
  text: {
    fontWeight: "900",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 22,
  },
  filterContainer: {
    flex: 0.6,
    backgroundColor: colors.white,
  },
  categoryContainer: {
    flex: 1.4,
    backgroundColor: colors.white,
  },
  recipies: {
    fontWeight: "900",
    marginBottom: 20,
    fontSize: 22,
  },
});
export default Home;
