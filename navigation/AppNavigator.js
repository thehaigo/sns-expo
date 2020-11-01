import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { Context as AuthContext } from "../context/AuthContext";

const AppNavigator = () => {
  const {
    state: { token },
    initAuthState,
  } = useContext(AuthContext);
  useEffect(() => {
    initAuthState();
  }, [token]);

  const switcher = () => {
    if (token === null) {
      return <AuthStack />;
    } else {
      return <MainStack />;
    }
  };

  return <NavigationContainer>{switcher()}</NavigationContainer>;
};

export default AppNavigator;
