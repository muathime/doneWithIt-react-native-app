import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <View style={styles.logoArea}>
          <Image
            style={styles.logo}
            source={require("../images/logo-red.png")}
          />
          <Text style={styles.headerText}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton btnColor="primary" title="Login" onPress={() => navigation.navigate("Login")} />
          <AppButton btnColor="danger" title="Register" onPress={() => navigation.navigate("Register")} />
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  headerText: {
    fontWeight: 'bold',
    fontSize : 26,
    paddingVertical : 20,

  },
  logoArea: {
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  logo: {
    marginTop: 40,
    width: 100,
    height: 100,
  },
  
});
export default WelcomeScreen;