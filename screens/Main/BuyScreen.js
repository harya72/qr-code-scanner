import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BuyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Buy Items Screen</Text>
    </View>
  );
};

export default BuyScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
