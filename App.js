import { SafeAreaView, StyleSheet, Text, View,} from "react-native";

import Constants from "expo-constants";
import { AddProductScreen } from "./assets/screens";

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
  }
})