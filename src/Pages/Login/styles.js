import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  logo: {
    width: 267,
    height: 258.1,
    borderRadius: 11,
    margin: 5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 25,
  },
  input: {
    fontSize: 15,
    lineHeight: 25,
    width: 325,
    height: 56,
  },
});

export default styles;
