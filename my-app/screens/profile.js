import React from "react";
import {Image, View, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, images, SIZES } from "../constants";
import { Feather } from '@expo/vector-icons';

function Profile({navigation}){
    const DummyData = [
        {
            id : 1,
            name : "Calum Lewis",
            avatar : images.recipeUser1,
            category : "Food",
            type : "Pancakes",
            ingredients : 10,
            image : images.recipeImage1,
            isFavorite : true,
        },
        {
            id : 2,
            name : "Ellif Sonas",
            avatar : images.recipeUser2,
            category : "Food",
            type : "Salad",
            ingredients : 7,
            image : images.recipeImage2,
            isFavorite : true,
        },
        {
            id : 3,
            name : "Elena Shelby",
            avatar : images.recipeUser3,
            category : "Food",
            type : "Salad",
            ingredients : 4,
            image : images.recipeImage3,
            isFavorite : true,
        },
        {
            id : 4,
            name : "Elena Shelby",
            avatar : images.recipeUser4,
            category : "Drinks",
            type : "Soup",
            ingredients : 4,
            image : images.recipeImage4,
            isFavorite : true,
        },
    ]
    function RenderProfileImage(){
        return (
            <View style = {styles.profileContainer}>
               <Image style = {{width : 100 , height : 100}}
                resizeMode="contain"
                source = {images.profile}/>
                <View style = {{alignItems : "center", marginTop : 24}}><Text style = {FONTS.title}>Choirul Syafril</Text></View>     
            </View>
        )
    }


    function RenderFavroites(){
        return (
            <View style = {{
                width : SIZES.width,
                alignItems : "center",
                borderTopColor : COLORS.secondary,
                borderTopWidth : 8,
                marginTop : 24,}}>
                <View style = {{alignSelf : "flex-start", marginTop: 18}}>
                    <Text style = {FONTS.title}>Favorites</Text>
                </View>
                <View style = {styles.recipeListContainer}>
                {
                    DummyData.map((item, index)=> (
                        
                        <View key = {index.toString()} style = {styles.recipeListItemContainer}>
                            <View style = {styles.userInfoContainer}>
                                <View>
                                    <Image 
                                        style = {{height : 31, width : 31, borderRadius : 11}}
                                        resizeMode = "contain"
                                        source = {item.avatar}/>
                                </View>
                                <View style = {{marginLeft : 8}}><Text style = {FONTS.p}>{item.name}</Text></View>
                            </View>
                            <View style = {styles.imageContainer}>
                                <Image 
                                    style = {{width : 151, height : 151}}
                                    resizeMode="contain"
                                    source = {item.image}/>
                                <View style = {styles.heartBackgroundContainer}
                                    >
                                    <Image style = {{width : 32, height : 32}}
                                        resizeMode= "contain"
                                        source = {images.heartBackground}/>
                                    <View style = {styles.heartIcon}>
                                        <Feather name="heart" size={18} color={item.isFavorite ? "white" : "black"} />
                                    </View>
                                    
                                </View>
                            </View>
                            <View style = {{alignSelf : "flex-start", marginTop : 16}}><Text style = {FONTS.title}>{item.type}</Text></View>
                            <View style = {styles.ingridentContainer}>
                                <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{item.type}</Text>
                                <Image style = {{margin : 8 ,width : 5, height : 5, tintColor : COLORS.secondaryText}} source = {images.dot}/>
                                <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{item.ingredients} ing</Text>
                            </View>
                        </View>
                    ))

                }
                </View>

            </View>
        )
    }
    
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View style = {{alignItems : "center"}}>
                <TouchableOpacity onPress = {()=>navigation.goBack()}style = {styles.headerContainer} >
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <RenderProfileImage/>
                <RenderFavroites/>
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
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    headerContainer : {
        alignSelf : "flex-start",
        marginTop : 70,
        marginLeft : 20,
        width : SIZES.width,
          
    },
    profileContainer : {
        alignItems : "center",
        width : SIZES.width,
        marginTop  : 11,
        marginRight : 15,
    },
    recipeListContainer : {
        flexDirection : "row",
        flexWrap : "wrap",
        marginTop : 30,
    },
    recipeListItemContainer : {
        alignItems : "center",
        justifyContent : "center",
        marginRight : 25,
        marginBottom : 32,
    },
    imageContainer : {
        marginTop : 16,
    },
    userInfoContainer : {
        alignSelf : "flex-start",
        flexDirection : "row",
        alignItems : "center"
    },
    imageContainer : {
        marginTop : 16,
    },
    heartBackgroundContainer : {
        position : "absolute",
        left : 103,
        top : 16,
        right : 16,
        alignItems : "center"
    },
    heartIcon : {
        position : "absolute",
        bottom : 8,
    },
    ingridentContainer : {
        flexDirection : "row",
        alignSelf : "flex-start", 
        alignItems : "center",
        marginLeft : 17,
    },
})

export default Profile;