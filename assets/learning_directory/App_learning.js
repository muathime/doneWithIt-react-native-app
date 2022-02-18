// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Text, Alert, View, Image, TouchableOpacity, Button, Platform, } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

const bodyText = "Test body text";
export default function App() {
  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log (useDeviceOrientation());
  // console.log("Test");
  // let x;
  // x = 123;
  // x.toString();
  return (    
    <View style={styles.container}>

      <Text numberOfLines={2}>{bodyText}
        <Text onLongPress={()=> console.log('pressed')}>
          {"\n"}
          dunia!
        </Text>
      </Text>

      <Text style={styles1.container}>
        {bodyText}
      </Text>
      {/* <Image source={require("./assets/favicon.png")}/> */}
      <Image loadingIndicatorSource={require("./assets/favicon.png")} source={{height:200, width:300, uri: "https://picsum.photos/200", }}/>
        <Text> {"\n"} </Text>
      <TouchableOpacity>
        <View style={{width: 200, height: 50, backgroundColor: "black"}}>

        </View>

        <Text> {"\n"} </Text>
      </TouchableOpacity>

      {/* <Button
      onPress = {()=> alert("Horrey!")}
      color="red"
      title="Click Me"/> */}

      <Button
      onPress = {()=> Alert.alert("Title", "Message goes here", [
        {text: "No"},
        {text: "Yes"}
      ])}
      color="red"
      title="Click Me"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});

const styles1 = StyleSheet.create({
  container: {
    color: 'red',
    fontSize: 24
  }
});