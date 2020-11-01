import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to SNS</Text>
      <Button title="SignUp" onPress={() => navigation.navigate("Signup")} />
      <Button title="SignIn" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignSelf: "center",
    flex: 1,
  },
});
export default WelcomeScreen;
