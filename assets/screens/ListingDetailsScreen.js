import React from 'react';
import { View, Image, StyleSheet, Text } from "react-native";
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListingDetailsScreen({ title, subtitle, picture }) {
  return (
    <View style={styles.card}>
      <Image source={picture} style={styles.pictureStye} />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle} </Text>
        <Text>
          <MaterialCommunityIcons name="star" color="gold" />
          <MaterialCommunityIcons name="star" color="gold" />
          <MaterialCommunityIcons name="star" color="gold" />
          <MaterialCommunityIcons name="star" color="gold" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingBottom: 20,
  },
  cardDetails: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  pictureStye: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default ListingDetailsScreen;