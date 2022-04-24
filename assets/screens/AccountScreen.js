import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import IconList from '../components/IconList';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function AccountScreen({navigation}) {
    return (
      <View>
        <View style={styles.header}>
          <ListItem
            title={"Antony Muathime"}
            subTitle={"muathimetests@gmail.com"}
            image={require("../images/antony.jpg")}
          />
        </View>

        <View style={styles.mid}>
          <IconList iconName={"menu"} color={"danger"} title={"My Listings"} />
          <IconList iconName={"mail"} color={"primary"} title={"My Account"} />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <IconList iconName={"logout"} color={"warning"} title={"Log out"} />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    marginBottom: 25,
    marginTop : 40
  },
  mid: {
    backgroundColor: colors.white,
    marginBottom: 25,
  },
  footer: {
    backgroundColor: colors.white,
  },
});
export default AccountScreen;