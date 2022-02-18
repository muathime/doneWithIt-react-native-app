import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import PickerItems from "../components/PickerItems"

function AppPicker({ icon, labels, onSelect, placeholder, selected, }) {
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
          <Text style={styles.text}>{selected? selected : placeholder }</Text>

          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={25}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.modal}>
        <Modal visible={visibility} animationType={"slide"}>
          <Button
            title={"Close"}
            onPress={() => setVisibility(false)}
            style={styles.closeButtton}
          />

          <FlatList
            data={labels}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItems
                label={item.label}
                onPress={() => {
                  setVisibility(false);
                  onSelect(item.label);
                }}
              />
            )}
          />
        </Modal>
      </View>
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
  closeButtton: {
  },
  icon: {
    padding: 10,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
