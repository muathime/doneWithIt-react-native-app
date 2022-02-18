import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

function ProductImageScreen() {
    return (
      <View>
        <View style={styles.topButtons}>
          <View style={styles.closeButton}>
            <MaterialCommunityIcons name="close" size={35} />
          </View>
          
          <View style={styles.deleteButton}>
            <MaterialCommunityIcons name="trash-can-outline" size={35} />
          </View>
        </View>
        <Image
          style={styles.productImage}
          source={require("../images/chair.jpg")}
          resizeMode="contain"
        />
      </View>
    );
}

const styles = StyleSheet.create({
    topButtons : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingBottom: 0,
        top : 50
        },
    closeButton : {
        left: 20,
        alignSelf: "auto",
    },
    deleteButton : {
        right: 20,
        alignSelf: "auto", 
    },
    productImage : {
        width : "100%",
        height : "100%",
    }
})

export default ProductImageScreen;