import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcon } from "./Icon";

import colors from "../config/colors";

function AppTextInput({ width = "100%", style, icon, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialIcon
          size="large"
          color="#2E3E5C"
          name={icon}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.greyLight}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",

    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 36,
    // width: '100%',
    padding: 5,
    paddingLeft: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
    // marginLeft: 30,
  },
  input: {
    fontSize: 17,
    color: "#2D0C57",
    padding: 10,
    // marginLeft: 5,
    textTransform: "capitalize",
  },
});

export default AppTextInput;
