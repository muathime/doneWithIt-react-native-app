import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Constants from "expo-constants";
import {
  AccountScreen,
  AddProductScreen,
  ListingDetailsScreen,
  ListingScreen,
  LoginScreen,
  MessagesScreen,
  ProductImageScreen,
  SelectImages,
  WelcomeScreen,
  RegisterScreen,
} from "./assets/screens";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "./assets/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./assets/navigation/AuthNavigator";
import BottomTabNavigator from "./assets/navigation/BottomTabNavigator";

//Easier way only accessible to components
const welcome = ({ navigation }) => (
  <WelcomeScreen
    onLogin={() => navigation.navigate("Login")}
    onRegister={() => navigation.navigate("Register")}
  />
);

//complex way accessible to both components and child components
// const welcome = () => {
//   const navigation = useNavigation();

//   return(
//     <WelcomeScreen
//       onLogin={() => navigation.navigate("Login")}
//       onRegister={() => navigation.navigate("Register")}
//     />
//   );
// }

const login = ({ navigation }) => (
  <LoginScreen onLogin={() => navigation.navigate("Home")} />
);

const register = () => <RegisterScreen />;

const listing = () => <ListingScreen />;
const account = ({ navigation }) => (
  <AccountScreen onLogout={() => navigation.navigate("Welcome")} />
);
const add = () => <AddProductScreen />;

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={welcome} />
    <Stack.Screen name="Login" component={login} />
    <Stack.Screen name="Register" component={register} />
    <Stack.Screen name="Home" component={TabNavigator} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      // activeBackgroundColor: colors.danger,
      activeTintColor: colors.danger,
      // inactiveBackgroundColor: "#eee",
      inactiveTintColor: colors.medium,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={listing}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"home"} size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name=" "
      component={add}
      options={{
        tabBarIcon: ({ size, color }) => (
          <View
            style={{
              backgroundColor: colors.white,
              height: 60,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <View
              style={{
                backgroundColor: colors.danger,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.white,
                  height: 25,
                  width: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12.5,
                }}
              >
                <MaterialCommunityIcons
                  name={"plus"}
                  size={size}
                  color={color}
                />
              </View>
            </View>
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"account"} size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    // paddingTop:Constants.statusBarHeight,
  },
});
