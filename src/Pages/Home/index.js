import React from "react";
import { View, Text, Image } from "react-native";
import { Input, Icon } from "react-native-elements";
import styles from "../../style/MainStyle"

export default function Home() {
  return (
    <View style={{backgroundColor: "#000",}}>
      <Input
        style={{ width: 350}}
        placeholder="INPUT WITH ICON"
        leftIcon={{ type: "font-awesome", name: "chevron-left" }}
      />
      
    </View>
  );
}
