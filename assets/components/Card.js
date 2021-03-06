import React from 'react';
import { View, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Card({title, subtitle, picture, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image source={{uri : picture}} style={styles.pictureStye} />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
          <MaterialCommunityIcons name="star" style={{ color: "gold" }} />
          <MaterialCommunityIcons name="star" style={{ color: "gold" }} />
          <MaterialCommunityIcons name="star" style={{ color: "gold" }} />
          <MaterialCommunityIcons name="star" style={{ color: "gold" }} />
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f2f2",
    paddingBottom: 20,
    margin: 10,
    overflow: "hidden",
    borderRadius: 15,
  },
  cardDetails: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  pictureStye: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;