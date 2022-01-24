import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Text, Input, Button, Icon } from "react-native-elements";
import styles from "./styles";

//   const loginFirebase = ()=>{
//       firebase.auth().singhInEmailAndPassword(email, password)
//       .then((userCredential) => {
//         let user = userCredential.user;
//         console.log(user);
//         // navigation.navigate("Task", { idUser: user.id})
//       })
//       .catch((error) => {
//         setErrorLogin(true);
//         let errorCode = error.code;
//         let errorMessage = error.message;
//       });
//   };

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const cameIn = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Main" }],
    });
  };
  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../Img/Onboarding-logo.png")}
      />
      <Text style={styles.title}>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        Type="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        leftIcon={{ type: "font-awesome", name: "envelope" }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="te"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      {errorLogin === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Invalid Username os Password</Text>
        </View>
      ) : (
        <View />
      )}

      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.TextButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.TextButtonLogin} onPress={() => cameIn()}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}> dont't have a registration?</Text>
      <Text
        style={styles.linkSubscrybe}
        onPress={() => navigation.navigate("NewUser")}
      >
        Subscribe now...
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}

