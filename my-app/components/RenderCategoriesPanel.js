import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

export default function RenderCategoriesPanel(props) {
      
    function handleSelect(val){
        props.setFilter(val)
    }

    return (
    <View style = {styles.categoriesPanelContainer}>
        <Text style = {FONTS.title}>Category</Text>
        <View style = {styles.buttonsContainer}>
            <TouchableOpacity 
                style = {[styles.button, {
                    backgroundColor : props.filter == "all" ? COLORS.primary : COLORS.button
                }]}
                onPress = {()=>handleSelect("all")}>
                <Text style = {[FONTS.secondaryText, {color : props.filter == "all" ? COLORS.white : COLORS.secondary}]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {[styles.button, {
                    backgroundColor : props.filter == "Food" ? COLORS.primary : COLORS.button
                }]}
                onPress = {()=>handleSelect("Food")}>
                <Text style = {[FONTS.secondaryText, {color : props.filter == "Food" ? COLORS.white : COLORS.secondary}]}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {[styles.button, {
                    backgroundColor : props.filter == "Drinks" ? COLORS.primary : COLORS.button
                }]}
                onPress = {()=>handleSelect("Drinks")}>
                <Text style = {[FONTS.secondaryText, {color : props.filter == "Drinks" ? COLORS.white : COLORS.secondary}]}>Drinks</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    categoriesPanelContainer : {
        width : SIZES.width,
        alignItems : "flex-start",
        marginLeft : 27,
    },
    buttonsContainer : {
        alignItems : "flex-start",
        flexDirection : "row",
        marginTop : 16,
        marginLeft : -10
    },
    button : {
        width : 68,
        height : 48,
        borderRadius : 32,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : COLORS.button,
        marginRight : 16,
    },
});
