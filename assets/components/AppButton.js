import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';

function AppButton({title, onPress, btnColor = colors.primary}) {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor: colors[btnColor]}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
  button: {
    width: "90%",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginVertical  :10,

    
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;