import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 11,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 25,
  },
  buttonStyle: {
    backgroundColor: "#1FCC79",
    borderRadius: 5,
  },
});

export default styles
