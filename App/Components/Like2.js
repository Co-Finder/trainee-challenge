// import React, { useEffect, useRef, useState } from "react";
// import * as Notifications from 'expo-notifications';
// import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

// export default function Like() {
//   const Liked = true

//   const notificationListener = useRef();
//   const responseListener = useRef();


//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View>{Liked}</View>

//       {Liked === true ? (
//         <TouchableOpacity style={styles.backgroundLikedFalse} onPress={async () => {
//           await schedulePushNotification();
//         }}>
//           {/* <View style={styles.backgroundLikedFalse}> */}
//           <Image
//             style={styles.logo}
//             source={require(`../Img/HeartLight.png`)}
//           />
//           {/* </View> */}
//         </TouchableOpacity>
//       ) : (
//         <View style={styles.backgroundLiked}>
//           <Image
//             style={styles.logo}
//             source={require(`../Img/Heart.png`)}
//           />
//         </View>
//       )}
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   logo: {
//     borderRadius: 11,
//     marginRight: 4,
//     marginBottom: 4,
//   },
//   backgroundLikedFalse: {
//     width: 32,
//     height: 32,
//     borderRadius: 8,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     //backgroundColor: 'rgba( 230, 230, 230, 0.3)',
//     backgroundColor: '#000',
//   },
//   backgroundLiked: {
//     width: 32,
//     height: 32,
//     borderRadius: 8,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     //backgroundColor: 'rgba( 230, 230, 230, 0.9)',
//     backgroundColor: '#000',
//   },
// });


// async function schedulePushNotification() {

//   await Notifications.scheduleNotificationAsync({
//     namePerson: "Mario 📬",
//     content: {
//       body: `So-and-so liked this recipe`,
//       data: { data: ' - 5 min' },
//     },
//     trigger: { seconds: 2 }, // timer do tempo que a aplicação vai levar para acionar a notificação
//   });
// } //notificação local,



// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }