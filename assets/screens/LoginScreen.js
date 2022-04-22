import React from 'react';
import { ImageBackground, Image, StyleSheet, Text } from "react-native";
import AppInputText from "../components/AppInputText"
import AppButton from "../components/AppButton";
import { Formik } from 'formik';
import * as yup from 'yup';
import ErrorMessages from '../components/ErrorMessages';
const validationSchema =yup.object().shape({
email : yup.string().required().email().label("Email"),
password : yup.string().required().min(4).label("Password")
});

function LoginScreen({onLogin}) {
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <Image source={require("../images/logo-red.png")} style={styles.logo} />
        <Formik
          initialValues={{ email: "", password: "" }}
          // onSubmit={(values) => console.log(values)}
          onSubmit={onLogin}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppInputText
                icon={"email"}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                placeholder={"Email"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={"email-address"}
                autoComplete={"email"}
              />

              <ErrorMessages error={errors.email} visible={touched.email} />

              <AppInputText
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                icon={"key"}
                keyboardType={"default"}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                placeholder={"Password"}
                secureTextEntry={true}
              />

              <ErrorMessages
                error={errors.password}
                visible={touched.password}
              />

              <AppButton
                title={"Login"}
                btnColor={"danger"}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        padding: 10,
        flex: 1,
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