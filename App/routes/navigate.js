import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Login from "../Screens/Login"
import NewUser from "../Screens/Login/NewUser/NewUser"
import HomeScreen from "../Screens/Home/HomeScreen";
import Profile from "../Screens/Profile/Profile";
import NotificationsScreen from "../Screens/NotificationsExpo/index";
import { Button, View } from "react-native";
import NotificationsFirebase from "../Screens/NotificationFirebase";


const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator screenOptions={{ headerShown: false }}>
    <LoginStack.Screen name="Login" component={Login} />
    <LoginStack.Screen name="PrincipalStackScreen" component={PrincipalStackScreen} />
    <LoginStack.Screen name="NewUser" component={NewUser} />
  </LoginStack.Navigator>
)

const PrincipalStack = createStackNavigator();
const PrincipalStackScreen = () => (
  <PrincipalStack.Navigator screenOptions={{ tabBarActiveTintColor: '#1FCC79', headerShown: false }}>
    <PrincipalStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
  </PrincipalStack.Navigator>
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
    <AppTabs.Screen name="Notifications" component={NotificationsScreen} options={{
      tabBarLabel: 'Notification', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bell" color={color} size={size} />
      ),
    }}
    />
    <AppTabs.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    }}
    />
    {/* <AppTabs.Screen name="Firebse" component={NotificationsFirebase} options={{
      tabBarLabel: 'Firebse', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="alert-box" color={color} size={size} />
      ),
    }}
    /> */}
  </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    initialRouteName="TabNavigation"
    screenOptions={{ tabBarActiveTintColor: '#1FCC79', headerShown: false }}>
    <AppDrawer.Screen name="Home" component={AppTabsScreen} />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);
//
function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
// 
export function Navigate() {
  return (
    <NavigationContainer independent={true}>
      <PrincipalStackScreen />
    </NavigationContainer>
  );
};
