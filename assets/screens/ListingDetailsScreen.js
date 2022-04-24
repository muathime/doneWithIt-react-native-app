import React from 'react';
import { View, Image, StyleSheet, Text } from "react-native";
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.card}>
      <Image source={listing.image} style={styles.pictureStye} />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subtitle}>{listing.price}</Text>
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