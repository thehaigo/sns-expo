import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}
