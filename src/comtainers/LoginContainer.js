import React from "react";
import LoginComponent from "../components/LoginComponent";

const LoginContainer = () => {
  const GoogleLogin = () => {
    console.log("GoogleLogin");
  };
  const GithubLogin = () => {
    console.log("GithubLogin");
  };
  const Logout = () => {
    console.log("Logout");
  };
  return (
    <LoginComponent
      GoogleLogin={GoogleLogin}
      GithubLogin={GithubLogin}
      Logout={Logout}
    />
  );
};

export default LoginContainer;
