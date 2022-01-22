import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  input: {
    fontSize: 15,
    margin: 16,
    paddingLeft: 58,
    width: 327,
    height: 56,
    borderRadius: 32,
    borderWidth: 0,
    backgroundColor: "#F4F5F7",
  },
  logo: {
    width: 267,
    height: 258.1,
    borderRadius: 11,
    margin: 5,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: "#2E3E5C"
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: "#9FA5C0",
  },
});

export default styles;
