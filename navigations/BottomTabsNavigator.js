import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/Main/DashboardScreen";
import ProfileScreen from "../screens/Main/ProfileScreen";
import QRReaderScreen from "../screens/Main/QRReaderScreen";
import BuyScreen from "../screens/Main/BuyScreen";
import SearchScreen from "../screens/Main/SearchScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = (props) => {
  console.log(props.route.params.params);
  return (
    <Tab.Navigator
      initialRouteName={
        props.route && props.route.params && props.route.params
          ? props.route.params.params
          : "Dashboard"
      }
      screenOptions={{
        headerShown: false,
        headerTitleAlign:'center',
       
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={BuyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QRReader"
        component={QRReaderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabsNavigator;
