import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firebase from '../../config/firebaseConfig';
import styles from '../Login/styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const cameIn = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Main" }],
    });
  };


  function loginFirebase(){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
      
    });
  }

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       console.log("Logado"+user.uid);
       cameIn()
      } else {
        console.log('not logged in')
      }
    });
  },[])

  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      alert('successfully logged out')
    }).catch(function(error) {
      alert('Error"')
    });
  }

  function createUserFirebase(){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.logo} source={require("../../Img/Onboarding-logo.png")} />
      
      <Text style={styles.title}>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>

      <TextInput style={styles.input} placeholder='Username' onChangeText={email => setEmail(email)} value={email} leftIcon={{ type: "font-awesome", name: "envelope"}} />

      <TextInput style={styles.input} placeholder='Password' onChangeText={password => setPassword(password)} value={password} leftIcon={{ type: "font-awesome", name: "envelope"}}  />

      <TouchableOpacity style={styles.button} onPress={()=>{ loginFirebase()}}>
        <Text style={styles.TextButtonLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ logOutFirebase()}}>
        <Text>LogOut</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{ createUserFirebase()}}>
        <Text>NewUser</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

