import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Context as AuthContext } from "../context/AuthContext";
const HomeScreen = () => {
  const {
    state: { token },
  } = useContext(AuthContext);
  return (
    <WebView
      source={{
        uri: "http://localhost:4000/sp/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }}
      style={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
  },
});
export default HomeScreen;
