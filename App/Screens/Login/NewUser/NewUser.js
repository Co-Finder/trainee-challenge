import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from "react-native";
import firebase from "../../../config/firebaseConfig"
import styles from "./styles"


export default function NewUser({ navigation }) {

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
      routes: [{ name: "PrincipalStackScreen" }],
    });
  };

  function createUserFirebase() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      cameIn
    });
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../Img/Onboarding-logo.png")}
      />

      <Text style={styles.title}>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your new account here</Text>

      <TextInput style={styles.input} type="email" placeholder='New E-mail' onChangeText={email => setEmail(email)} value={email} leftIcon={{ type: "font-awesome", name: "envelope" }} />

      <TextInput style={styles.input} type="password" placeholder='New Password' onChangeText={password => setPassword(password)} value={password} leftIcon={{ type: "font-awesome", name: "envelope" }} />

      <TouchableOpacity style={styles.buttonSubscribe} onPress={() => { createUserFirebase() }}>
        <Text style={styles.TextButtonLogin} >Subscribe...</Text>
      </TouchableOpacity>

      <Text style={styles.linkSubscrybe} onPress={() => { CameInNot() }}>I already have login</Text>

    </KeyboardAvoidingView>
  );
}
