import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import {FONTS} from "./constants/theme"
import {Home, Login, Notification, Profile} from "./screens";
import Tabs from "./navigation/tabs"
import Register from './screens/register';
import '@react-native-async-storage/async-storage';
import { useState, useContext, useEffect } from 'react';
import AppContext from './context/appContext';
import { app, db } from './firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';

//suppressing the firebase AsyncStorage waring
import {LogBox} from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);



const Stack = createNativeStackNavigator()

  

function Stacks(){
  const {user} = useContext(AppContext);
  return (
    
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName='login'
        screenOptions = {{
          headerShown : false
        }}>
        {
          user ? (<Stack.Screen name = "main" component = {Tabs}/>) : 
          (
            <>
            <Stack.Screen 
              name = "register" 
              component = {Register} 
              options = {{
                headerShown : true,
                title : "Register"}}/>
            
            <Stack.Screen name = "login" component = {Login}/>
            </>
          ) 
        }
     
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}




export default function App() {
  const[user, setUser] = useState(null)
  const[isloading, setIsLoading] = useState(true)
  const auth = getAuth()
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        const uid = user.uid
        //console.log("uid in useEffect:", uid)
        
        async function getUser(id){
          //console.log("async function")
          const querySnapshot = await getDocs(collection(db, "users"))
          //console.log(querySnapshot)
          let userData;
          querySnapshot.forEach(doc=>{
            
            let data = doc.data()
            if(data.id === id){
              userData = data
            }
          })
          return userData
        }
      
        (async()=>{
          let userData = await getUser(uid)
          setUser(userData)
          setIsLoading(false)
        })()

      }
      else{
        //console.log("inside else condition in useEffect")
        setIsLoading(false)
      } 
    })
    //debugging
    //setIsLoading(false)
    //return unsubscribe
  }, [])


  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if(isloading){
    return (
      <View style = {styles.container}>
        <Image style = {{width : 200, height : 200}} resizeMode = "contain" source = {require("./assets/balls.gif")}/>
      </View>
    )
  }

  return (
    
      <AppContext.Provider value = {{user, setUser}}>
        <Stacks/>
      </AppContext.Provider>
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
