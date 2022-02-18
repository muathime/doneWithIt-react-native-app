import { Dimensions, View, StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {

  const {landscape} = useDeviceOrientation();

  return (
  <View style={{
      backgroundColor : 'blue',
      height : landscape ? "100%" : "40%",
      width : "100%",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android
       }}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#ffffff", 
    paddingTop : Platform.OS === 'Android' ? 100 : 0,
  }
});