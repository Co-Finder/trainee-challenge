import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/FontAwesome";

import Home from "./home";
import Profile from "../../screens/Profile";
import Notification from "../../screens/Notification";
import colors from "../../config/colors";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: `${colors.primary}`,
      inactiveTintColor: `${colors.grey}`,
      keyboardHidesTabBar: true,
    }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="notification"
      component={Notification}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="md-notifications" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntIcons name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
