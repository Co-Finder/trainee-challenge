import {Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RenderRecipeList(props) {
    let DummyData = props.DummyData
    const[data, setData] = useState(DummyData)
    const navigation = useNavigation()


    function filterRecipes(filter){
        if(filter === "all")
        {
            return DummyData
        }
        else
        {
            return DummyData.filter(item=> item.category === filter)
        }
        
    }


    function handleFavorite(id){
        let updated = DummyData.map(item=> {
            if(item.id === id){
                item.isFavorite = !item.isFavorite
            }
            return DummyData
        })
        setData(updated)
    }


    function handleRecipeSelect(item){
        navigation.navigate("recipeDetails", {data : item})
    }

  
    return (
    <View style = {styles.recipeContainer}>
        <View style = {{alignSelf : "flex-start", marginTop: 18}}>
            <Text style = {FONTS.title}>Recepies</Text>
        </View>
        <View style = {styles.recipeListContainer}>
        {
            filterRecipes(props.filter).map((item, index)=> (
                <TouchableOpacity 
                    key = {index.toString()} 
                    onPress = {()=>handleRecipeSelect(item)}>
                    <View style = {styles.recipeListItemContainer}>
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
                            <TouchableOpacity style = {styles.heartBackgroundContainer}
                                onPress = {()=>handleFavorite(item.id)}>
                                <Image style = {{width : 32, height : 32}}
                                    resizeMode= "contain"
                                    source = {images.heartBackground}/>
                                <View style = {styles.heartIcon}>
                                    <Feather name="heart" size={18} color={item.isFavorite ? "white" : "black"} />
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                        <View style = {{alignSelf : "flex-start", marginTop : 16}}><Text style = {FONTS.title}>{item.type}</Text></View>
                        <View style = {styles.ingridentContainer}>
                            <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{item.type}</Text>
                            <Image style = {{margin : 8 ,width : 5, height : 5, tintColor : COLORS.secondaryText}} source = {images.dot}/>
                            <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{item.ingredients} ing</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))

        }
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    recipeContainer : {
        width : SIZES.width,
        alignItems : "center",
        borderTopColor : COLORS.secondary,
        borderTopWidth : 8,
        marginTop : 24,
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

});
