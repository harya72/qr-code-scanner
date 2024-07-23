import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";

const DashboardScreen = () => {
  const { logout } = useAuth();
  const Logout = async () => {
    try {
      logout();
      console.log("User logged out");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Text>DashboardScreen</Text>
      <Button title="Logout" onPress={Logout} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
