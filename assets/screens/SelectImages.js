import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";

function SelectImages(props) {
  const [imageUri, setImageUri] = useState();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) alert("Please enable permissions!");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      setImageUri(result.uri);
    } catch (error) {
      alert("Opps! an error occured", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={selectImage}>
        <MaterialCommunityIcons name={"camera"} size={35} />
      </TouchableHighlight>
      <Image
        source={{ uri: imageUri }}
        style={{ width: "100%", height: "90%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flexDirection : 'column',
     margin : 30,
     justifyContent : 'center',
     alignItems : 'center'
    }
});

export default SelectImages;