import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "ios" ? 0 : 20,
  },
  containerNotification: {
    marginTop: 24,
    marginLeft: 24,
  },
  notificationCard:{
    justifyContent: "space-between",
    flexDirection: "row",
  },
  

});

export default styles;
