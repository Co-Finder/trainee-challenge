import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window")

export const COLORS = {
    mainText : "#2E3E5C",
    secondaryText : "#9FA5C0",
    primary : "#1FCC79",
    white : "#FFFFFF",
    secondary : "#9FA5C0",
    background : "#E5E5E5",
    NotificationHeadings : "#3E5481",
    search : "#9FA5C0",
    button : "#F4F5F7",
}


export const SIZES = {
    h1 : 32,
    secondary : 15,
    body3 : 12,
    width,
    height, 
    h2 : 17,
    h3 : 15,

}


export const FONTS = {
    h1 : {fontFamily : "Inter_400Regular", fontSize : 22, lineHeight : 32, fontWeight : "bold", letterSpacing : 0.5, color : "#2E3E5C"},
    buttonText : {fontFamily : "Inter_400Regular", fontSize : 15, lineHeight : 18, fontWeight : "bold", letterSpacing : 0.112, color : COLORS.white},
    secondaryText : {fontFamily : "Inter_400Regular", fontSize : SIZES.secondary, lineHeight : 25, fontWeight : "bold", letterSpacing : 0.5, color : COLORS.secondaryText},
    title : {fontFamily : "Inter_400Regular", fontSize : SIZES.h2, lineHeight : 27, fontWeight : "bold", letterSpacing : 0.5, color : COLORS.NotificationHeadings},
    notificationTitle : {fontFamily : "Inter_400Regular", fontSize : SIZES.h3, lineHeight : 27, fontWeight : "bold", letterSpacing : 0.5, color : COLORS.NotificationHeadings},
    input : {fontFamily : "Inter_400Regular", fontSize : SIZES.h3, lineHeight : 18, fontWeight : "normal", letterSpacing : 0.5, color : COLORS.NotificationHeadings},
    p : {fontFamily : "Inter_400Regular", fontSize : SIZES.body3, lineHeight : 15, fontWeight : "normal", letterSpacing : 0.5, color : COLORS.mainText},
    h2 : {fontFamily : "Inter_400Regular", fontSize : SIZES.secondary, lineHeight : 25, fontWeight : "700", letterSpacing : 0.5, color : COLORS.mainText},
}