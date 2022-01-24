import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E3E5C",
    marginBottom: 16,
  },
  logo: {
    width: 267,
    height: 258.1,
    borderRadius: 11,
    margin: 0,
    marginTop: 0,
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
  subtitle: {
    fontSize: 15,
    lineHeight: 25,
    color: "#9FA5C0",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: 327,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#1FCC79",
  },
  TextButtonLogin: {
    fontWeight: "bold",
    fontSize: 23,
    color: "white",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  registration: {
    marginTop: 20,
    color: "#4d5156"
  },  
  linkSubscrybe: {
    color: "#1877f2",
    fontSize: 16,
  },
});

export default styles;
