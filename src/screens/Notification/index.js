import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const data = [
  {
    notificationTitle: "Notification title",
    notificationDescription: "  notification description",
    time: "1hr",
  },
  {
    notificationTitle: "Notification title",
    notificationDescription: "  notification description",
    time: "1hr",
  },
  {
    notificationTitle: "Notification title",
    notificationDescription: "  notification description",
    time: "1hr",
  },
  {
    notificationTitle: "Notification title",
    notificationDescription: "  notification description",
    time: "1hr",
  },
];

const Notification = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.date}>Today</AppText>
      {data.map(
        ({ notificationDescription, notificationTitle, time }, index) => (
          <View key={index * Math.random(30)} style={styles.notification}>
            <Image source={require("../../assets/profile.png")} />
            <View style={styles.notificationContainer}>
              <AppText style={styles.text}>{notificationTitle}</AppText>
              <View style={styles.notificationDescription}>
                <AppText style={styles.notificationContent}>
                  {notificationDescription}{" "}
                </AppText>
                <View style={styles.dot} />
                <AppText style={styles.notificationContent}>{time}</AppText>
              </View>
            </View>
          </View>
        )
      )}
    </Screen>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  notification: {
    flexDirection: "row",
    marginBottom: 40,
  },
  notificationContainer: {
    marginLeft: 15,
  },
  notificationDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontWeight: "900",
    marginBottom: 40,
  },
  text: {
    fontWeight: "900",
  },
  dot: {
    borderRadius: 50,
    backgroundColor: colors.greyLight,
    height: 5,
    width: 5,
    marginHorizontal: 10,
  },
  notificationContent: {
    fontSize: 16,
    color: colors.greyLight,
  },
});
