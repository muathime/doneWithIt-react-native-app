import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ListingDetailsScreen, LoginScreen, RegisterScreen, WelcomeScreen } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="Home" component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;