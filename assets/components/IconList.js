import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

function IconList({iconName, color, title}) {
    return (
      <View style={styles.container}>
        <View style={[styles.icon, {backgroundColor:colors[color]}]}>
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={colors.white}
          />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: colors.medium,
  },
});
export default IconList;