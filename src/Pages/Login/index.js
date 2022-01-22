import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Text, Input, Button } from "react-native-elements";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    console.log("entrou"); 
    console.log(email);
    console.log(password);
  }

  return (
    <View style={styles.container}>
      <Image 
        style={{
          width: 267,
          height: 258.1,
          borderRadius: 11,
        }}
        source={require("../../Img/Onboarding-logo.png")}
      />
      <Text h1>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>
      <Input
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        leftIcon={{ type: "font-awesome", name: "envelope-open" }}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        leftIcon={{ type: "font-awesome", name: "lock" }}
        // rightIcon={{type: "font-awesome", name: "eye-slash"}}
        secureTextEntry={true}
      />

      <Button
        style={styles.buttonStyle}
        title="Login"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => entrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 11,
  },
  subtitle: {
    // fontFamily: Inter,
    // fontStyle: normal,
    // fontWeight: 500,
    fontSize: 15,
    lineHeight: 25,
  },
  buttonStyle: {
    backgroundColor: "#1FCC79",
    borderRadius: 5,
  },
});
