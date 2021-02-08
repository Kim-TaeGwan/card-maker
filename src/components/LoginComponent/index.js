import React from "react";

import logo from "../../assets/images/logo.png";

import styles from "./Login.module.css";
import LoginButton from "./LoginButton";

const LoginComponent = () => {
  return (
    <div className={styles.login}>
      <header>
        <img src={logo} alt="logo" width="50px" height="30px" />
        <h1 className={styles.title}>Business Card Maker</h1>
      </header>
      <div className={styles.body}>
        <button className={styles.logout}>Logout</button>
        <h1 className={styles.loginTitle}>Login</h1>
        <LoginButton ButtonName="Google" />
        <LoginButton ButtonName="Github" />
      </div>
      <footer>
        <p>Code your dream</p>
      </footer>
    </div>
  );
};

export default LoginComponent;
