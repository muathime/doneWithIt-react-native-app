import { SafeAreaView, StyleSheet,} from "react-native";

import colors from "./assets/config/colors";
import Constants from "expo-constants";
import LoginScreen from "./assets/screens/LoginScreen";


export default function App() {

  return (
    <SafeAreaView style={styles.main}>
    <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent : "flex-start",
    backgroundColor: colors.light,
    paddingTop : Constants.statusBarHeight
  },
});