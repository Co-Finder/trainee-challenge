import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input } from 'react-native-elements';
import { FONTS } from '../constants';

export default function RenderSearchBox() {
  return (
    <View style = {styles.searchBoxContainer}>
        <Input 
            placeholder = "Search a Food"
            leftIcon = {{
                type : "antdesign",
                name : "search1",
            }}
            inputContainerStyle = {{
                width : 327,
                backgroundColor : "#F4F5F7",
                height : 57,
                borderRadius : 32,
                borderWidth : 1,
                borderColor : "#F4F5F7",
            }}
            leftIconContainerStyle = {{
                color : "#3E5481",
                paddingLeft : 20,
                paddingRight : 11,
            }}
            inputStyle = {FONTS.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
    searchBoxContainer : {
        alignItems : "center",
        justifyContent : "center",
        marginTop : 16,
    },
});
