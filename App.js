import { Button, Image, SafeAreaView, StyleSheet, Text, View,} from "react-native";

import Constants from "expo-constants";
import { AccountScreen, AddProductScreen, ListingDetailsScreen, ListingScreen, MessagesScreen, ProductImageScreen, SelectImages, WelcomeScreen } from "./assets/screens";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AddProductScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : '#fef6f6',
    flex : 1,
    paddingTop:Constants.statusBarHeight,
  },
})