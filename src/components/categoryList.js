import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

const OptionsList = ({ title, onPress, active }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.textBox,
          active && active === title ? styles.active : styles.inactive,
        ]}
      >
        <Text
          style={
            active && active === title
              ? styles.colorActive
              : styles.colorInActive
          }
        >
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OptionsList;

const styles = StyleSheet.create({
  textBox: {
    height: 40,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
    elevation: 1,
    marginRight: 20,
  },
  active: {
    backgroundColor: colors.primary,
  },
  inactive: {
    backgroundColor: colors.greySecondary,
  },
  colorActive: {
    color: colors.white,
  },
  colorInActive: {
    color: colors.greyLight,
  },
});
