import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "ios" ? 0 : 20,
  },
  arrowBack:{
    marginTop: 24,
    marginRight: 34,
    marginLeft: 34,
    alignItems: "center",
    flexDirection: "row-reverse", 
    justifyContent: "space-between",
  },
  profileStyle:{
    alignItems: "center",
  },
  photoProfile: {
    marginTop: 0,
    borderRadius: 50,
    marginBottom: 24,
  }, 
  containerFavorites: {
    marginTop: 24,
    marginLeft: '5%',
  },
  recipesContainer:{
    flexDirection: "row", 
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
  },
  containeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containeCardRecipes:{
      flexDirection: "row", 
      flexWrap: 'wrap',
      justifyContent: "space-evenly",
  },
  Like:{
    position: "absolute",
    marginTop: "47%",
    marginLeft: "68%",
  },
 
});

export default styles;
