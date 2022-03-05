import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function PickerItems({ label, onPress, icon, bgcolor }) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.container}>
        <View style={[styles.iconBackground, {backgroundColor:colors[bgcolor]}]}>
          { icon && <MaterialCommunityIcons name={icon} size={35} color={colors.white}/> }
        </View>
      </View>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    alignSelf : 'center'
  },
  text: {
    fontFamily: "sans-serif",
    color: colors.medium,
    alignSelf: "center",
  },
  iconBackground: {
    height: 70,
    width: 70,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default PickerItems;