import React from 'react';
import { Text, StyleSheet } from "react-native";
import colors from '../config/colors';

function ErrorMessages({ error, visible }) {
  if (!error || !visible) return null;

  return <Text style={styles.errors}>{error}</Text>;
}

const styles = StyleSheet.create({
    errors :{
        color:colors.danger
    }
})
export default ErrorMessages;