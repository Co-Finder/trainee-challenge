import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcon } from "./Icon";

import defaultStyles from "../config/styles";

function AppTextInput({ width = "100%", style, icon, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialIcon
          size="small"
          color="#000000"
          name={icon}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    // width: '100%',
    padding: 5,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
