import React, { useState } from "react";
import {TouchableOpacity,View, Image, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar} from "react-native";
import { Input } from "react-native-elements";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import RenderSearchBox from "../components/searchbox";
import RenderCategoriesPanel from "../components/RenderCategoriesPanel";
import RenderRecipeList from "../components/RenderRecipeList";

function Home(){
    const DummyData = [
        {
            id : 1,
            name : "Calum Lewis",
            avatar : images.recipeUser1,
            category : "Food",
            type : "Pancakes",
            ingredients : 10,
            image : images.recipeImage1,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",
                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
        {
            id : 2,
            name : "Ellif Sonas",
            avatar : images.recipeUser2,
            category : "Food",
            type : "Salad",
            ingredients : 7,
            image : images.recipeImage2,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
        {
            id : 3,
            name : "Elena Shelby",
            avatar : images.recipeUser3,
            category : "Food",
            type : "Salad",
            ingredients : 4,
            image : images.recipeImage3,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            },

        },
        {
            id : 4,
            name : "Elena Shelby",
            avatar : images.recipeUser4,
            category : "Drinks",
            type : "Soup",
            ingredients : 4,
            image : images.recipeImage4,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
        {
            id : 5,
            name : "Elena Shelby",
            avatar : images.recipeUser3,
            category : "Food",
            type : "Salad",
            ingredients : 4,
            image : images.recipeImage3,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
        {
            id : 6,
            name : "Elena Shelby",
            avatar : images.recipeUser3,
            category : "Food",
            type : "Salad",
            ingredients : 4,
            image : images.recipeImage3,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
        {    id : 7,
            name : "Elena Shelby",
            avatar : images.recipeUser4,
            category : "Drinks",
            type : "Soup",
            ingredients : 4,
            image : images.recipeImage4,
            isFavorite : false,
            details : {
                instructions : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus enim vel metus tristique dapibus. Sed interdum, nibh sed elementum feugiat, tellus augue lacinia nisl, nec elementum ",                likes : 256,
                ingredients : ["4 Eggs", "1/2 Butter", "1/2 Sugar"]
            }
        },
    ]

    const[filter, setFilter] = useState("all")

    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View >
                    <RenderSearchBox/>
                    <RenderCategoriesPanel filter = {filter} setFilter = {setFilter}/>
                    <RenderRecipeList filter = {filter} DummyData = {DummyData}/>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#FFFFFF",
        alignItems : "center",
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
    },
})

export default Home;