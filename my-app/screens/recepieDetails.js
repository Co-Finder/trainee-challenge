import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import {TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, ScrollView } from "react-native"
import { COLORS, FONTS, images, SIZES } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function RecepieDetails({route, navigation}){
    const [isheart, setIsHeart] = useState(false)
    let data = route.params.data    
    
    function RenderHeader(){
        return (
            <View style = {styles.headerContainer}>
                <Image style = {{width : SIZES.width, height : SIZES.width}}
                    resizeMode= "cover"
                    source = {route.params.data.image}/>
                <TouchableOpacity 
                    style = {[styles.buttonBackground, {position : "absolute", top : 60, left : 24,}]}
                    onPress = {()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {[styles.buttonBackground, {position : "absolute", top : 60, right : 24,}]}
                    onPress = {()=>setIsHeart(prev=>!prev)}>
                    {
                        isheart ? (<AntDesign name="heart" size={24} color="white" />) : (<AntDesign name="hearto" size={24} color="white" />)
                    }
                </TouchableOpacity>
            </View>
        )
    
    }

    function Details(){
        return (
            
            <View style = {[styles.detailsContainer, {marginTop : -100}]}>
                <View style = {{width : 40, height : 5, backgroundColor : "#D0DBEA", marginTop : 16, marginBottom : 23}}></View>
                <View style = {styles.headingContainer}>
                    <Text style = {FONTS.h1}>{data.type}</Text>
                </View>
                <View style = {styles.ingridentContainer}>
                    <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{data.type}</Text>
                    <Image style = {{margin : 8 ,width : 5, height : 5, tintColor : COLORS.secondaryText}} source = {images.dot}/>
                    <Text style = {{...FONTS.secondaryText, fontWeight : "500" , fontSize : SIZES.body3}}>{data.ingredients} ing</Text>
                </View>
                <View style = {styles.nameLikesContainer}>
                    <View style = {{flexDirection : "row", alignItems : "center"}}>
                        <View style = {{marginLeft : 24}}>
                            <Image style = {{width : 32, height : 32}} resizeMode="contain" source = {data.avatar}/>
                        </View>
                        <View style = {{marginLeft : 8}}>
                            <Text style = {FONTS.h2}>{data.name}</Text>
                        </View>
                    </View>
                    <View style = {styles.likesContainer}>
                        <View style = {{alignItems : "center" ,justifyContent : "center",width : 32, height : 32, borderRadius : 32, backgroundColor : COLORS.primary}}>
                            <AntDesign name="heart" size={15} color="white" />
                        </View>
                        <View style = {{marginLeft : 8}}>
                            <Text style = {FONTS.h2}>{data.details.likes} Likes</Text>
                        </View>
                    </View>
                </View>

                {/* Seperator line */}
                <View style = {styles.seperator}></View>

                {/* Instructions */}
                <View style = {styles.instructionContainer}>
                    <View style = {{alignSelf : "flex-start", marginLeft : 27, marginTop : 16, width : SIZES.width}}>
                        <Text style = {FONTS.title}>Instructions</Text>
                    </View>
                    <View style = {{alignItems : "center", width : 327}}>
                        <Text style = {FONTS.secondaryText}>{data.details.instructions}</Text>
                    </View>
                </View>

                {/* Seperator line */}
                <View style = {[styles.seperator, {marginTop : 16}]}></View>

                {/* Ingredients */}
                <View style = {styles.ingredientsContainer}>
                    <Text style = {[FONTS.title, {marginLeft : 24}]}>Ingredients</Text>
                    <View style = {{ marginTop : 16, marginLeft : 24}}>
                        {data.details.ingredients.map((item, index)=>(
                            <View style = {{flexDirection : "row", }} key = {index}>
                                <View style = {styles.checkMarkContainer}>
                                    <Ionicons name="checkmark-outline" size={24} color="#1fCC79" />
                                </View>
                                <Text style = {{...FONTS.h2, marginLeft : 8}}>{item}</Text>
                            </View>
                        ))
                        }
                        
                        
                    </View>
                </View>
            </View>
            
        )
    }

    return (
    <ScrollView contentContainerStyle = {{paddingBottom : 20, backgroundColor : "#FFFFFF"}}>
       <SafeAreaView style = {styles.Androidcontainer}> 
            <View style = {[styles.container, ]}>
                <RenderHeader/>
                <Details/>   
            </View>
        </SafeAreaView>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    Androidcontainer : {
        flex : 1,
        backgroundColor : "#FFFFFF",
        //backgroundColor : "red",
        //justifyContent : "center",
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        //alignItems : "center"
    },
    container : {
        alignItems : "center",
        marginTop : -40,          
    },
    buttonBackground : {
        backgroundColor : "rgba(255, 255, 255, 0.2)",
        borderRadius : 28,
        width : 56,
        height : 56,
        justifyContent : "center",
        alignItems : "center"
    },
    detailsContainer : {
        alignItems : "center",
        backgroundColor : "#FFFFFF",
        borderTopLeftRadius : 32,
        borderTopRightRadius : 32,
        width : SIZES.width,
           
    },
    headingContainer : {
        alignSelf : "flex-start",
        marginLeft : 24,
    },
    ingridentContainer : {
        flexDirection : "row",
        alignSelf : "flex-start", 
        alignItems : "center",
        marginLeft : 24,
        marginTop : 8,
    },
    nameLikesContainer : {
        marginTop : 16,
        flexDirection : "row",
        justifyContent : "space-between",
        alignSelf : "flex-start",
        //alignItems : "center",
        width : SIZES.width,
    },
    likesContainer : {
        flexDirection : "row",
        alignItems : "center",
        marginRight : 24,
    },
    seperator : {
        width : 327,
        height : 1,
        backgroundColor : "#D0DBEA",
        marginTop : 19,
    },
    instructionContainer : {
        alignItems : "center",
        justifyContent : "center",
        width : SIZES.width
    },
    instructionContainer : {
        alignItems : "center",
        marginTop : 8,
        
    },
    ingredientsContainer : {
        alignItems : "flex-start",
        width : SIZES.width,
        marginTop : 16,
    }, 
    checkMarkContainer : {
        height : 24,
        width : 24,
        borderRadius : 100,
        backgroundColor : "#E3FFF8",
        alignItems : "center",
        justifyContent : "center",
        marginBottom : 15
    }
})