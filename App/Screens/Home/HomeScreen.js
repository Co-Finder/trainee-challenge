import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import * as Notifications from 'expo-notifications';
import styles from "./styles";

import ButtonCategory from "../../Components/ButtonCategory";
import TextTitle from "../../Components/TextTitle";
import Spacing from "../../Components/Spacing";
import RecipesCard from "../../Components/RecipesCard";
import Like from "../../Components/Like";

import data from "../../data/data.json"

export default function HomeScreen() {

  const [searchRecipes, setSearch] = useState(); 
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  const recipeType = () => {
    alert("We don't have any posts yet");
  };
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Recipe"
        onChangeText={(value) => setSearch(value)}
      />
      <View style={styles.containeCategry}>
        <TextTitle labelButton="Category" />
        <View style={styles.containeRow}>
          <ButtonCategory labelButton="All" onpress={recipeType} />
          <ButtonCategory labelButton="Food" onpress={recipeType} />
          <ButtonCategory labelButton="Drink" onpress={recipeType} />
          <ButtonCategory labelButton="candy" onpress={recipeType} />
        </View>
      </View>
      <Spacing />
      <ScrollView >
        <View style={styles.containerFavorites}>
          <TextTitle labelButton="Recipes" />
        </View>
        <View style={styles.containeCardRecipes}>
          {
            data.recipes.map((item, index) => {
              return (
                <View style={styles.containeRow}>
                    <RecipesCard
                      imagePost={item.recipeImageUrl}
                      userProfileImageUrl={item.userProfileImageUrl}
                      userProfileName={item.userProfileName}
                      recipeTitle={item.recipeTitle}
                      recipeType={item.recipeType}
                      recipeIngredients={item.recipeIngredients} />
                  <TouchableOpacity style={styles.Like} onPress={async () => {
                    await schedulePushNotification();
                  }}>
                      <Like />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}


///


async function schedulePushNotification() {
  
  await Notifications.scheduleNotificationAsync({
    namePerson: "Mario 📬",
    content: {
      body: `So-and-so liked this recipe`,
      data: { data: ' - 5 min' },
    },
    trigger: { seconds: 2 }, // timer do tempo que a aplicação vai levar para acionar a notificação
  });
} //notificação local,



async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}