import React from 'react';
import {View, Image, StyleSheet } from "react-native";
import AppInputText from "../components/AppInputText"
import AppButton from "../components/AppButton";
import { Formik } from 'formik';

function LoginScreen() {
    return (
      <View style={styles.container}>
        <Image source={require("../images/logo-red.png")} style={styles.logo} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppInputText
                icon={"email"}
                onChangeText={handleChange('email')}
                placeholder={"Email"}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={"email-address"}
                autoComplete='off'
              />

              <AppInputText
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                icon={"key"}
                keyboardType={"default"}
                onChangeText={handleChange('password')}
                placeholder={"Password"}
                secureTextEntry={true}
              />

              <AppButton
                title={"Login"}
                btnColor={"danger"}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    logo: {
        alignSelf: 'center',
        width: 80,
        height : 80,
        marginTop : 50,
        marginBottom : 20
    }
})
export default LoginScreen;