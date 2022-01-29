import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required().label("username"),
//   password: Yup.string().required().min(4).label("Password"),
// });

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView style={styles.imgContainer}>
        <View style={styles.imgContainer}>
          <ImageBackground
            style={styles.bgImg}
            source={require("../../assets/Onboarding.jpg")}
          />
        </View>
        <View style={styles.formContainer}>
          <AppText style={styles.title}>Start Cooking</AppText>
          <AppText style={styles.subText}>
            Please enter your account here
          </AppText>
          <AppForm
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => navigation.navigate("TabNavigation")}
            // validationSchema={validationSchema}
          >
            <AppFormField
              style={styles.inpt}
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              name="username"
              placeholder="Username"
              // textContentType=""
            />
            <AppFormField
              style={styles.inpt}
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton
              style={styles.buttonContainer}
              title="Login"
              // onPress={() => navigation.navigate("TabNavigation")}
            />
          </AppForm>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: colors.white,
  },
  imgContainer: {
    flex: 1,
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    color: colors.secondary,
    fontWeight: "700",
    alignSelf: "center",
    letterSpacing: 0.5,
    paddingBottom: 20,
  },
  subText: {
    color: colors.greyLight,
    alignSelf: "center",
    // paddingTop: 10,
  },
});

export default LoginScreen;
