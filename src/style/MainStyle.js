import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

export default styles