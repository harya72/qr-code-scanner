import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabsNavigator from "./BottomTabsNavigator";
import Settings from "../screens/Main/Settings";
import Jobs from "../screens/Main/Jobs";
import Spaces from "../screens/Main/Spaces";
import { useAuth } from "../context/AuthContext";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const { logout } = useAuth();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => logout()} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabsNavigator}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen name="Search for Jobs" component={Jobs} />
      <Drawer.Screen name="Spaces" component={Spaces} />
      <Drawer.Screen name="Profile Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
