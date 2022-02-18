import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
function AppInputText({icon, ...moreProps}) {
    return (
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.black} />}
        <TextInput style={styles.input} {...moreProps} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight : 20,
    backgroundColor : colors.white,
    borderRadius : 25,
    marginBottom : 15,
  },
  icon: {
    padding: 10,
  },
  input: {
    padding: 10,
    width: '100%'
  },
});
export default AppInputText;