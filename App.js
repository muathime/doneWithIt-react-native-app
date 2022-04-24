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
import AuthNavigator from "./assets/navigation/AuthNavigator";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthNavigator />
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