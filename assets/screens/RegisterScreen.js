import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from "react-native";
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import * as yup from 'yup';
import ErrorMessages from '../components/ErrorMessages';
import { ImageBackground } from 'react-native';

const validationSchema = yup.object().shape({
username: yup.string().required().label("Username"),
email : yup.string().email().required().label('Email'),
password : yup.string().min(6).required().label('Password')
});

function RegisterScreen() {
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <View style={{ marginBottom: 35 }} /> 
        {/* to get top space */}

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
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
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                icon="account"
                onBlur={() => setFieldTouched("username")}
                onChangeText={handleChange("username")}
                placeholder={"Username"}
              />
              <ErrorMessages
                error={errors.username}
                visible={touched.username}
              />

              <AppInputText
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                icon="email"
                keyboardType={"email-address"}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                placeholder={"Email"}
              />
              <ErrorMessages error={errors.email} visible={touched.email} />

              <AppInputText
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                icon="key"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                placeholder={"Password"}
                secureTextEntry={true}
              />
              <ErrorMessages
                error={errors.password}
                visible={touched.password}
              />

              <AppButton
                btnColor="danger"
                title="Register"
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
    flex: 1,
    paddingTop : 20,
    paddingLeft : 10
  },
});
export default RegisterScreen;