import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../Config/colors";
import { MaterialIcon } from "./Icon";

const SearchBar = ({ onPress, value, placeholder }) => {
  return (
    <View style={styles.InputContainer}>
      <View style={styles.iconBox}>
        <MaterialIcon size="large" color="#000000" name="search1" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onPress}
        value={value}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    width: "100%",
    borderColor: colors.grey,
    borderWidth: 1.5,
    borderRadius: 40,
    backgroundColor: colors.white,
  },
  iconBox: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    width: "90%",
    height: 50,
    fontSize: 20,
    color: colors.grey,
    padding: 10,
    marginLeft: 5,
  },
});
