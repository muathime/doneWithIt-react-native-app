import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from '../config/colors';

function PickerItems({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontFamily: "sans-serif",
    color: colors.medium,
  },
});
export default PickerItems;