import { Button, Image, SafeAreaView, StyleSheet, Text, View,} from "react-native";

import Constants from "expo-constants";
import { AccountScreen, AddProductScreen, ListingDetailsScreen, ListingScreen, LoginScreen, MessagesScreen, ProductImageScreen, SelectImages, WelcomeScreen, RegisterScreen } from "./assets/screens";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "./assets/config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"

//Easier way only accessible to components
const welcome = ({ navigation }) => (
  <WelcomeScreen
    onLogin={() => navigation.navigate("Login")}
    onRegister={() => navigation.navigate("Register")}
  />
);

//complex way accessible to both components and child components
// const welcome = () => {
//   const navigation = useNavigation();

//   return(
//     <WelcomeScreen
//       onLogin={() => navigation.navigate("Login")}
//       onRegister={() => navigation.navigate("Register")}
//     />
//   );
// }

const login = () =>(
  <LoginScreen />
);

const register = () =>(
  <RegisterScreen />
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={welcome} />
    <Stack.Screen name="Login" component={login} />
    <Stack.Screen name="Register" component={register} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.danger,
      activeTintColor: colors.white,
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: colors.black,
    }}
  >
    <Tab.Screen
      name="Login"
      component={login}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"login"} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Welcome"
      component={welcome}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"home"} size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Register"
      component={register}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"pen-plus"} size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : 'transparent',
    flex : 1,
    // paddingTop:Constants.statusBarHeight,
  },
})