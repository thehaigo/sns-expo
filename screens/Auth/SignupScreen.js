import React, { useContext, useEffect } from "react";
import AuthForm from "./components/organisms/AuthForm";
import { Context as AuthContext } from "../../context/AuthContext";

const SignupScreen = () => {
  const {
    state: { errorMessage },
    signup,
    clearErrorMessage,
  } = useContext(AuthContext);
  useEffect(() => {
    clearErrorMessage();
  }, []);
  return (
    <AuthForm
      headerText="Sign Up SNS"
      submitButtonText="Sign up"
      errorMessage={errorMessage}
      onSubmit={signup}
    />
  );
};

export default SignupScreen;
