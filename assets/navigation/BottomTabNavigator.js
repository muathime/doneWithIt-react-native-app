import React from 'react';
import { View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import { AccountScreen, AddProductScreen, ListingScreen } from '../screens';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => (
  <Tab.Navigator
    mode="modal"
    tabBarOptions={{
      // activeBackgroundColor: colors.danger,
      activeTintColor: colors.danger,
      // inactiveBackgroundColor: "#eee",
      inactiveTintColor: colors.medium,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={ListingScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"home"} size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name=" "
      component={AddProductScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
            <View
              style={{
                backgroundColor: colors.danger,
                height: 60,
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                bottom: 5,
                borderColor: colors.white,
                borderWidth: 5
              }}
            >
                <MaterialCommunityIcons
                  name={"plus-circle"}
                  size={size}
                  color={colors.white}
                />
            </View>
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"account"} size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;