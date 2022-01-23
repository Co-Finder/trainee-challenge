import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },  
  containerScrolView:{
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontSize: 15,
    margin: 16,
    paddingLeft: 58,
    width: '90%',
    height: 56,
    fontSize: 15,
    borderRadius: 32,
    borderWidth: 0,
    backgroundColor: "#F4F5F7",
  },
  containeCategry:{
    paddingLeft: 24,
    paddingRight: 24,
  },
  containeRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  
});

export default styles;
