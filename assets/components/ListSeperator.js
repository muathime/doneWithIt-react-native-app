import React from 'react';
import { View, StyleSheet } from "react-native";
import colors from '../config/colors';

function ListSeperator() {
    return (
       <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
        height : 1,
        backgroundColor : colors.light
    }
})
export default ListSeperator;