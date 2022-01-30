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
    marginBottom: 24,
  },
  photoProfile: {
    marginTop: 0,
    borderRadius: 50,
    marginBottom: 24,
  }, 
  containerFavorites: {
    marginLeft: '5%',
    marginTop: 24,
  },
  recipesContainer:{
    flexDirection: "row", 
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
  },
 
});

export default styles;
