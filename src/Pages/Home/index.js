import React from "react";
import { View, Text, Image } from "react-native";
import { Input, Button } from "react-native-elements";

import styles from "./styles";

export default function Home() {
  return (
    <View>
      <Input
        style={styles.input}
        placeholder="B"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        leftIcon={{ type: "font-awesome", name: "envelope-open" }}
      />
    </View>
  );
}
