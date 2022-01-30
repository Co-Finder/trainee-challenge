import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from '../../config/firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles"



export default function Profile({ navigation}) {
  
  const HomeScreen = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Main" }],
    });
  };
  const getOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      getOut()
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <MaterialCommunityIcons name="chevron-left" color={'#000'} size={35} onPress={()=>{HomeScreen()}} />
      </TouchableOpacity>

      <Text>Under development...</Text>
      <TouchableOpacity onPress={()=>{ logOutFirebase()}}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
