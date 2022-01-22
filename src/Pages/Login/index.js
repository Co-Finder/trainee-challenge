import React, { useState } from "react";
import { View, Image,   } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import styles from "./styles"

export default function Login(navegatin) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    console.log("entrou"); 
    console.log(email);
    console.log(password);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require("../../Img/Onboarding-logo.png")}
      />
      <Text h1>Start Cooking</Text>
      <Text style={styles.subtitle}>Please enter your account here</Text>
              
      <Input
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        leftIcon={{ type: "font-awesome", name: "envelope-open" }}/>
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        leftIcon={{ type: "font-awesome", name: "lock" }}
        // rightIcon={{type: "font-awesome", name: "eye-slash"}}
        secureTextEntry={true}/>

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
          marginVertical: 0,
          borderRadius: 30,
        }}
        buttonStyle={{
          backgroundColor: '#1FCC79',
        }}
        onPress={() => entrar()}
      />
    </View>
  );
}

