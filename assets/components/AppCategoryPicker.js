import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import PickerItems from "./PickerItems"

function AppCategoryPicker({ icon, labels, onSelect, placeholder, selected, }) {
  const [visibility, setVisibility] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setVisibility(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.black}
            />
          )}
          <Text style={styles.text}>{selected ? selected : placeholder}</Text>

          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={25}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibility} animationType={"slide"} >
        <View style={{}}>
          <Text style={styles.title}>Choose Category</Text>
        </View>

        <View style={styles.list}>
          <FlatList
            data={labels}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItems
                icon={item.icon}
                bgcolor={item.bgcolor}
                label={item.label}
                onPress={() => {
                  setVisibility(false);
                  onSelect(item.label);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: 15,
  },
  list: {
    flex: 1,
    height: "70%",
    backgroundColor: colors.light,
    borderRadius: 25,
  },
  icon: {
    padding: 10,
  },
  text: {
    flex: 1,
    color: colors.medium,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: colors.medium,
    margin: 40,
  },
});
export default AppCategoryPicker;
