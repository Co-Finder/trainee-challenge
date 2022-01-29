import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import { MaterialIcon } from "../../components/Icon";

const data = [
  { ingredent: "4 eggs" },
  { ingredent: "1/2 Butter" },
  { ingredent: "1/2 Butter" },
];

const RecipeDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <ImageBackground
          source={require("../../assets/FoodPicture.png")}
          style={styles.bgImg}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View
              style={[
                styles.like,
                {
                  backgroundColor: " rgba(255, 255, 255, 0.2)",
                  marginLeft: 10,
                  marginTop: 30,
                },
              ]}
            >
              <MaterialIcon
                color={colors.white}
                size={"medium"}
                name={"back"}
              />
            </View>
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.like,
              {
                backgroundColor: " rgba(255, 255, 255, 0.2)",
                marginRight: 10,
                marginTop: 30,
              },
            ]}
          >
            <MaterialIcon color={colors.white} size={"medium"} name={"heart"} />
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.RecipeDetails}>
        <View style={styles.borderLine} />
        <AppText style={styles.title}>Pancake Cacao Maca Walnut Milk</AppText>
        <View style={styles.categoryContainer}>
          <AppText style={styles.text}>Food</AppText>
          <View style={styles.dot} />
          <AppText style={styles.text}>12 ing</AppText>
        </View>
        <View style={styles.section2}>
          <View style={styles.viewFlex}>
            <Image
              style={styles.img}
              source={require("../../assets/profile3.png")}
            />
            <AppText
              style={{ fontWeight: "bold", marginLeft: 10, fontSize: 16 }}
            >
              Elena Shelby
            </AppText>
          </View>
          <View style={styles.viewFlex}>
            <View style={styles.like}>
              <MaterialIcon
                color={colors.white}
                size={"medium"}
                name={"heart"}
              />
            </View>
            <AppText
              style={{ fontWeight: "bold", marginLeft: 10, fontSize: 16 }}
            >
              277 likes
            </AppText>
          </View>
        </View>
        <View style={styles.Line} />
        <AppText style={{ fontWeight: "bold", marginBottom: 10 }}>
          Instructions
        </AppText>
        <AppText style={styles.text}>
          Your recipe has been uploaded, you can see it on your profile. Your
          recipe has been uploaded, you can see it on your
        </AppText>
        <View style={styles.Line} />
        <AppText style={{ fontWeight: "bold" }}>Ingredients</AppText>
        {data.map(({ ingredent }, index) => (
          <View key={index * Math.random(30)} style={styles.ingridentList}>
            <View style={styles.checked}>
              <MaterialIcon
                color={colors.primary}
                size={"small"}
                name={"check"}
              />
            </View>
            <AppText style={{ marginLeft: 20, fontWeight: "500" }}>
              {ingredent}{" "}
            </AppText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgBox: {
    flex: 0.5,
  },
  bgImg: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RecipeDetails: {
    flex: 3,
    paddingHorizontal: 20,
    top: -25,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  borderLine: {
    width: 60,
    height: 7,
    backgroundColor: colors.grey,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  Line: {
    width: "97%",
    height: 2,
    backgroundColor: colors.grey,
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
  },
  title: {
    fontWeight: "900",
    marginTop: 30,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "35%",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: colors.greyLight,
    fontSize: 16,
  },
  dot: {
    borderRadius: 50,
    backgroundColor: colors.greyLight,
    height: 5,
    width: 5,
  },
  section2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  viewFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 42,
    height: 42,
  },
  like: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  ingridentList: {
    marginTop: 10,
    flexDirection: "row",
  },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: "#E3FFF8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
