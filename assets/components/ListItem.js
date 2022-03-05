import React from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight } from "react-native";
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({title, subTitle, image, onpress, renderRightActions, renderLeftActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
      >
        <TouchableHighlight onPress={onpress} underlayColor={colors.light}>
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.chevrons}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {subTitle}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={"chevron-down"}
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  chevrons:{
    flex: 1
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 17,
    color: colors.medium,
  },
  title: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
  },
});
export default ListItem;