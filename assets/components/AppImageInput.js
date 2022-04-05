import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

var id = 0;

function AppImageInput({onBlur, onChangeText}) {
const [selectedImages, setSelectedImages] = useState([]);

useEffect(()=>{
    permission();
}, []);

const permission = async()=>{
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
        alert("Allow this App to use Camera. Go to settings");
}

const selectImage = async()=>{
    try {
        const result = await ImagePicker.launchImageLibraryAsync();
        if(!result.cancelled)
            selectedImages.push({id: id++, image: result.uri});
            // console.log(selectedImages);
            setImageUri(result.uri);
    } catch (error) {
        alert("Sorry permission error occured!");
    }
}

const handleDelete = (message) => {
  Alert.alert("Confirm", "Remove this Image?", [
    {
      text: "No",
      style: "cancel",
    },
    {
      text: "Yes",
      onPress: () => {
        setSelectedImages(selectedImages.filter((m) => m.id !== message.id));
      },
    },
  ]);
};

const [imageUri, setImageUri] = useState();
   return (
     <View style={styles.container}>
       {imageUri && (
         <FlatList
           data={selectedImages}
           keyExtractor={(data) => data.id.toString()}
           numColumns={3}
           renderItem={({ item }) => (
             <TouchableOpacity onPress={() => handleDelete(item)}>
               <Image
                 source={{ uri: item.image }}
                 resizeMode={"cover"}
                 style={styles.image}
               />
             </TouchableOpacity>
           )}
         />
       )}

       <TouchableOpacity style={styles.camera} onPress={selectImage}>
         <MaterialCommunityIcons name={"camera-plus-outline"} size={25} />
       </TouchableOpacity>
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 110,
  },
  camera: {
    justifyContent: "center",
    backgroundColor: colors.medium,
    padding: 25,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    padding: 35,
    margin: 5,
    borderRadius: 25,
    height: 100,
    width: 100,
  },
});

export default AppImageInput;