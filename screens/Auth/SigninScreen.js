import React, { useContext, useEffect } from "react";
import AuthForm from "./components/organisms/AuthForm";
import { Context as AuthContext } from "../../context/AuthContext";

const SigninScreen = () => {
  const {
    state: { errorMessage },
    signin,
    clearErrorMessage,
  } = useContext(AuthContext);
  useEffect(() => {
    clearErrorMessage();
  }, []);
  return (
    <AuthForm
      headerText="Sign In SNS"
      submitButtonText="Sign in"
      errorMessage={errorMessage}
      onSubmit={signin}
    />
  );
};

export default SigninScreen;
