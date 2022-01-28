import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
import firebase from '../../config/firebaseConfig';

export default function NewUser({navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [errorLoaging, setErrorLoaging] = useState('');


  const CameInNot = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const cameIn = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "HomeScreen" }],
    });
  };

  function createUserFirebase(){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      cameIn
      // alert(errorCode, "Codigo test");
    });
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subscribe}>
        
      <Text style={styles.title}>Remember To Stretch</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>

      <TextInput style={styles.input} placeholder='Username' onChangeText={email => setEmail(email)} value={email} leftIcon={{ type: "font-awesome", name: "envelope"}} />

      <TextInput style={styles.input} placeholder='Password' onChangeText={password => setPassword(password)} value={password} leftIcon={{ type: "font-awesome", name: "envelope"}}  />

        <TouchableOpacity onPress={()=>{ createUserFirebase()}}>
          <Text>Subscribe...</Text>
        </TouchableOpacity>

        <Text onPress={()=>{ CameInNot()}}>Já tenho Login</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  subscribe: {
    justifyContent: "center",
    alignItems: "center",
  },
});