import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "ios" ? 0 : 20,
  },
  arrowBack:{
    margin: 32,
    backgroundColor: "#ddd",
    width: 40,
  },  
 
});

export default styles;
