import { SafeAreaView, StyleSheet, Text, View,} from "react-native";

import colors from "./assets/config/colors";
import Constants from "expo-constants";
import LoginScreen from "./assets/screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : '#fef6f6',
    flex : 1,
    paddingTop:Constants.statusBarHeight,
  }
})