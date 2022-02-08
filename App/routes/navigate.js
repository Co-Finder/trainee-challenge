import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Login from "../Screens/Login"
import NewUser from "../Screens/Login/NewUser/NewUser"
import HomeScreen from "../Screens/Home/HomeScreen";
import Profile from "../Screens/Profile/Profile";
import NotificationsScreen from "../Screens/Notifications/index";


const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginStack.Screen name="Login" component={Login} />
    <LoginStack.Screen name="TabNavegation" component={AppTabsScreen} />
    <LoginStack.Screen name="NewUser" component={NewUser} />
  </LoginStack.Navigator>
)

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator screenOptions={{ tabBarActiveTintColor: '#1FCC79', headerShown: false }}>
    <AppTabs.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}
    />
    <AppTabs.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    }}
    />
    <AppTabs.Screen name="Notifications" component={NotificationsScreen} options={{
      tabBarLabel: 'Notification', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bell" color={color} size={size} />
      ),
    }}
    />
  </AppTabs.Navigator>
);

// const AppDrawer = DrawerItem();
// const AppDrawerScreen = () => (
//   <AppDrawer.Navigator drawerPosition="right">
//     <AppDrawer.Screen
//       name="Tabs"
//       component={AppTabsScreen}
//       options={{ drawerLabel: "Home" }}
//     />
//     <AppDrawer.Screen
//       name="Profile"
//       component={Profile}
//       options={{
//         gestureEnabled: false,
//       }}
//     />
//   </AppDrawer.Navigator>
// );

export function Navigate() {
  return (
    <NavigationContainer independent={true}>
      <LoginStackScreen />
    </NavigationContainer>
  );
};
