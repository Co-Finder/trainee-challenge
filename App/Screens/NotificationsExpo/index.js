import React, { useState, useEffect, useRef } from "react";
import * as Notifications from 'expo-notifications';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';


import PhotoProfile from "../../Components/PhotoProfile";
import TextTitle from "../../Components/TextTitle"
import styles from "./styles"

import data from "../../data/data.json"

// Seta a notificação Notification

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationsScreen() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

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
    <ScrollView style={styles.container}>
      <View style={styles.containerNotification}>
        <TextTitle labelButton="Today" style={styles.TextTitle} />
        {
          data.recipes.map((item) => {
            return (
              <TouchableOpacity onPress={async () => {
                await schedulePushNotification(); // onde a notificação é lancada para o usuario
              }}>
                <View style={styles.notificationCard}>
                  <View style={styles.photoProfile}>
                    <PhotoProfile
                      userProfileImageUrl={item.userProfileImageUrl}
                    />
                  </View>
                  <View style={styles.containerMensage}>
                    <Text>{item.userProfileName} </Text>
                    <Text>{item.menasageNotifi}{item.dataTime}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>

      </View>
      <View style={{ marginBottom: 20 }} />
    </ScrollView>
  );
}

async function schedulePushNotification() {

  await Notifications.scheduleNotificationAsync({
    namePerson: "Mario 📬",
    content: {
      body: `Posted a new recipe`,
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