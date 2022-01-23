import React, { useState } from "react";
import { SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import styles from "./styles";

export default function Login(navegatin) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    console.log("entrou");
    console.log(email);
    console.log(password);
  };

  return (
    <ScrollView style={{ marginBottom: 33 }}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../Img/Onboarding-logo.png")}
        />
        <Text style={styles.title}>Start Cooking</Text>
        <Text style={styles.subtitle}>Please enter your account here</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            height: 50,
            width: 327,
            borderRadius: 30,
          }}
          buttonStyle={{
            backgroundColor: "#1FCC79",
          }}
          onPress={() => entrar()}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
