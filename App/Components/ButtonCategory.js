import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";


const ButtonCategory = ({ labelButton, onpress }) => {
  
  
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.title}>{labelButton}</Text>
    </TouchableOpacity>
  );
};


export default ButtonCategory;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F4F5F7",
    width: 68,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    marginRight: 16,
    marginTop: 24,
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    color: "#9FA5C0"
  }
});
