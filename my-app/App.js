import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import {FONTS} from "./constants/theme"
import {Home, Login, Notification, Profile} from "./screens";
import Tabs from "./navigation/tabs"



const Stack = createNativeStackNavigator()


function Stacks(){
  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName='login'
        screenOptions = {{
          headerShown : false
        }}>
        <Stack.Screen name = "login" component = {Login}/>
        <Stack.Screen name = "main" component = {Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Stacks/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
