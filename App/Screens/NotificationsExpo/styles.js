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
  photoProfile:{
    marginBottom: 12,
    marginTop: 12,
  },
  notificationCard:{
    flexDirection: "row",
    alignItems: "center",
  },
  containerMensage:{
    marginLeft: 24,
    flexDirection: "column",
  },
  bodyMensage:{
    backgroundColor: "#ddd"
  }
  

});

export default styles;
