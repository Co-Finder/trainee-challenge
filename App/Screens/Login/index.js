import React, { useState, useEffect } from "react";
import { Text, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import firebase from "../../firebaseConfig/firebaseConfig";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cameIn = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "TabNavegation" }],
    });
  };

  const LoginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      let user = userCredential.user;
      cameIn()
    })
      .catch((error) => {
        let errorCode = error.code;
        alert(errorCode )
      });
  };


  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        cameIn();
      } else {
        alert(errorCode);
      }
    });
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../Img/Onboarding-logo.png")}
      />

      <Text style={styles.title}>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>

      <TextInput style={styles.input} placeholder="Username" onChangeText={(email) => setEmail(email)} value={email} leftIcon={{ type: "font-awesome", name: "envelope" }} />

      <TextInput style={styles.input} placeholder="Password" onChangeText={(password) => setPassword(password)} value={password} leftIcon={{ type: "font-awesome", name: "envelope" }} />

      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.button}>
          <Text style={styles.TextButtonLogin}> Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => { LoginFirebase(); }} >
          <Text style={styles.TextButtonLogin}> Login</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity>
        <Text style={styles.registration}>
          Don't have registration.
          <Text style={styles.linkSubscrybe} onPress={() => navigation.navigate("NewUser")} >
            Subscribe now!
          </Text>
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
  );
}
