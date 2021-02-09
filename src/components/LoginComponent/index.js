import React from "react";

import logo from "../../assets/images/logo.png";

import styles from "./Login.module.css";
import LoginButton from "./LoginButton";

const LoginComponent = ({ GoogleLogin, GithubLogin, Logout }) => {
  return (
    <div className={styles.login}>
      <header>
        <img src={logo} alt="logo" width="50px" height="30px" />
        <h1 className={styles.title}>Business Card Maker</h1>
      </header>
      <div className={styles.body}>
        <button className={styles.logout} onClick={Logout}>
          Logout
        </button>
        <h1 className={styles.loginTitle}>Login</h1>
        <LoginButton ButtonName="Google" loginClick={GoogleLogin} />
        <LoginButton ButtonName="Github" loginClick={GithubLogin} />
      </div>
      <footer>
        <p>Code your dream</p>
      </footer>
    </div>
  );
};

export default LoginComponent;
