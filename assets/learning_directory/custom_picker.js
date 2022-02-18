import { Platform, SafeAreaView, StyleSheet, Text, TextInput} from "react-native";

import colors from "../config/colors";
import Constants from "expo-constants";
import { useState } from "react";
import AppPicker from "../components/AppPicker";
import AppInputText from "../components/AppInputText";

const categories = [
{ value : 1, label: "Furniture"},
{ value : 2, label: "Clothing"},
{ value : 3, label: "Cameras"},
{ value : 4, label: "Cars"},
];
export default function App() {
  const [category, setCategory] =useState(categories[3].label);

  return (
    <SafeAreaView style={styles.main}>
      <AppPicker
      selected = {category}
      onSelect = {item =>setCategory(item)}
      placeholder={"Categories"}
      icon={"apps"}
      labels={categories} 
      />
      <AppInputText
        icon="phone"
        maxLength={15}
        placeholder="Enter your mobile number"
        keyboardType="numeric"
        secureTextEntry={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent : "flex-start",
    backgroundColor: colors.light,
    paddingTop : Constants.statusBarHeight
  },
});