import React, { useState } from "react";
import {Image, View, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar} from "react-native";
import {FONTS, images, SIZES} from "../constants";
// Assimption is that the dummmy data is sorted by dates 0348 2103014
function Notification(){
    const DummyData = [
    {
        title : "A Notification in MIddle for yesterday",
        descrpition : "notification description",
        date : "2022-02-01"
    },
    {
        title : "Yesterday Titlee",
        descrpition : "notification description",
        date : "2022-01-31"
    },
    {
        title : "Yesterday Title",
        descrpition : "notification description",
        date : "2022-01-31"
    },
    {
        title : "Yesterday Title",
        descrpition : "notification description",
        date : "2022-01-31"
    },
    
    
    {
        title : "Yesterday Title",
        descrpition : "notification description",
        date : "2022-01-31"
    },
    {
        title : "Notification Title",
        descrpition : "notification description",
        date : "2022-01-30"
    },
    {
        title : "Notification Title",
        descrpition : "notification description",
        date : "2022-01-30"
    },
    
    {
        title : "Notification Title",
        descrpition : "notification description",
        date : "2022-01-29"
    },
    ]

    let flagforToday = false
    let counterForToday = 0
    let flagForYesterDay = false 
    let counterForYesterday = 0
    let flagforWeek = false
    let counterForWeek = 0

    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View >
                    {
                        DummyData.map((item, index)=> {
                            let date = new Date()
                            let day = date.getDate()
                            let notificationDate = new Date(item.date)
                            let notificationDay = notificationDate.getDate()
                            
                            if(day - notificationDay == 0 && flagforToday)
                            {
                                flagforToday = false
                                
                            }
                            else if(day - notificationDay == 0 && counterForToday == 0)
                            {
                                flagforToday = true
                                counterForToday++
                            }

                            else if(day - notificationDay == 1 || day - notificationDay < 0 && flagForYesterDay)
                            {
                                flagForYesterDay = false
                                
                            }
                            else if(day - notificationDay == 1 || day - notificationDay < 0 && counterForYesterday == 0)
                            {
                                flagforToday = false
                                flagForYesterDay = true
                                counterForYesterday++
                            }
                            else if (day - notificationDay > 1 || day - notificationDay < 0 && (day - notificationDay >= -29  ) && flagforWeek)
                            {
                                flagforWeek = false
                                
                            }
                            else if(day - notificationDay > 1 || day - notificationDay < 0 && (day - notificationDay >= -29 ) && counterForWeek == 0)
                            {
                                flagforWeek = true
                                counterForWeek++
                            }

                            return (
                                <View key = {index.toString()}>
                                { flagforToday && <View style = {styles.dayContainer}>
                                    <Text style = {FONTS.title}>Today</Text>
                                </View>}

                                { flagForYesterDay && <View style = {styles.dayContainer}>
                                    <Text style = {FONTS.title}>Yesterday</Text>
                                </View>}

                                { flagforWeek && <View style = {styles.dayContainer}>
                                    <Text style = {FONTS.title}>Last Week</Text>
                                </View>}
                                
                                <View style = {styles.notificationContainer}>
                                    <View>
                                        <Image 
                                            style = {{width : 48, height : 48}}
                                            resizeMode="contain"
                                            source = {images.notificationAvatar}/>
                                    </View>
                                    <View style = {styles.infoContainer}>
                                        <Text style = {FONTS.notificationTitle}>{item.title}</Text>
                                        <Text style = {FONTS.secondaryText}>notification description</Text>
                                    </View>
                                </View>
                                </View>         
                            )
                        })
                    }
                    
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
        alignItems : "center",
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    dayContainer : {
        alignSelf : "flex-start",
        width : SIZES.width,
        marginTop : 29,
        marginBottom : 49
    },
    notificationContainer : {
        flexDirection : "row",
        alignItems : "center",
        marginTop : 12,
    },
    infoContainer : {
        marginLeft : 16,
    }
})

export default Notification;