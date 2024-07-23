import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabsNavigator from "./BottomTabsNavigator";



const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabsNavigator}
        initialParams={{ params: "Dashboard" }}
      />
      <Drawer.Screen
        name="Buy Items"
        component={BottomTabsNavigator}
        initialParams={{ params: "Buy" }}
      />
      <Drawer.Screen
        name="Search Items"
        component={BottomTabsNavigator}
        initialParams={{ params: "Search" }}
      />
      <Drawer.Screen
        name="QR Scan"
        component={BottomTabsNavigator}
        initialParams={{ params: "QRReader" }}
      />
      <Drawer.Screen
        name="Profile Settings"
        component={BottomTabsNavigator}
        initialParams={{ params: "Profile" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
