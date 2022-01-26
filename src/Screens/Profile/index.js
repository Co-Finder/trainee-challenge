import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from '../../config/firebaseConfig';

export default function Profile({ navigation}) {

  const cameIn = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      alert('successfully logged out')
      cameIn()
    }).catch(function(error) {
      alert('error: ' + error.message)
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Under development...</Text>
      <TouchableOpacity onPress={()=>{ logOutFirebase()}}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
