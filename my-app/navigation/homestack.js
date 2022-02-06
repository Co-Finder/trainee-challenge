import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";
import RecepieDetails from "../screens/recepieDetails"


const Stack = createNativeStackNavigator()

export default function HomeStack(){
    return (
    <Stack.Navigator
        initialRouteName="homescreen"
        screenOptions={{
            headerShown : false,
        }}>
        <Stack.Screen name = "homescreen" component={Home}/>
        <Stack.Screen name = "recipeDetails" component={RecepieDetails}/>
    </Stack.Navigator>
    )
    
    
}