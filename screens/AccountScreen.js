import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
  },
});
export default AccountScreen;
