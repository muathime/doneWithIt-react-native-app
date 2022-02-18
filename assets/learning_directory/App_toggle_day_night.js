import { Platform, SafeAreaView, StyleSheet, Switch, Text, TextInput} from "react-native";

import colors from "./assets/config/colors";
import Constants from "expo-constants";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {

  const [val, setval] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.main,
        { backgroundColor: val ? colors.white : colors.black },
      ]}
    >
      <MaterialCommunityIcons name="weather-night" color={colors.medium} size={25} style={styles.icons}/>
      <Switch value={val} onValueChange={(newVal) => setval(newVal)} />
      <MaterialCommunityIcons name="weather-sunny" color={'yellow-green'} size={25} style={styles.icons}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  icons:{
    paddingTop : 10
  }
});