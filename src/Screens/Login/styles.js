import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  containerView: {
    backgroundColor: "#fff",
  },
  logo: {
    width: 267,
    height: 258.1,
    borderRadius: 11,
    margin: 0,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E3E5C",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: "#9FA5C0",
  },
  input: {
    fontSize: 15,
    lineHeight: 25,
    margin: 10,
    paddingLeft: 58,
    width: 327,
    height: 56,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#D0DBEA",
  },
});

export default styles;
