import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {Home, Notification, Profile} from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLORS, FONTS} from "../constants";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from "./homestack";

const Tab = createBottomTabNavigator()

function Tabs(){
  return (
    <Tab.Navigator 
      initialRouteName='home'
      screenOptions = {{
        headerShown : false,
        tabBarStyle : {
            height : 97,
        },
        
        tabBarLabelStyle : {
          fontSize : FONTS.body3,
          marginTop : 0,
          marginBottom : 37,
          lineHeight : 14.52,
      },
      tabBarInactiveTintColor : COLORS.secondary,
      tabBarActiveTintColor : COLORS.primary,
        

      }}>
      <Tab.Screen 
        name = "home" 
        component = {HomeStack}
        options = {{
          tabBarIcon : ({focused}) => (
              <MaterialIcons name= "home" size={24} color= {focused ? COLORS.primary : COLORS.secondary} />
          ),
          
                    
      }}/>
      <Tab.Screen 
        name = "notification" 
        component = {Notification}
        options = {{
          tabBarIcon : ({focused}) => (
            <Ionicons name="notifications-sharp" size={24} color= {focused ? COLORS.primary : COLORS.secondary} />
          )
        }}/>
      <Tab.Screen 
        name = "profile" 
        component = {Profile}
        options = {{
          tabBarIcon : ({focused}) => (
            <FontAwesome5 name="user-alt" size={24} color= {focused ? COLORS.primary : COLORS.secondary} />
          )
        }}
        />
    </Tab.Navigator>
  )
}


export default Tabs;