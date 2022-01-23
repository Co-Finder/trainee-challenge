import React, { useState } from "react";
import { SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import { Text, Input, Button, Icon } from "react-native-elements";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const cameIn = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Main" }],
    });
  };

  return (
    <ScrollView style={styles.containerView}>
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
          // onSubmitEditing={}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
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
          onPress={() => cameIn()}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
