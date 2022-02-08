import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import PhotoProfile from "../../Components/PhotoProfile";
import TextTitle from "../../Components/TextTitle"
import styles from "./styles"

import data from "../../data/data.json"

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerNotification}>
        <TextTitle labelButton="Today" style={styles.TextTitle} />
        {
          data.recipes.map((item, index) => {
            return (
              <View style={styles.notificationCard}>
                <PhotoProfile 
                  userProfileImageUrl={item.userProfileImageUrl} 
                />
              </View>
            )
          })
        }

      </View>
    </SafeAreaView>
  );
}
