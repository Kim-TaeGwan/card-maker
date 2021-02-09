import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = ({ ButtonName, loginClick }) => {
  return (
    <button className={styles.button} onClick={loginClick}>
      {ButtonName}
    </button>
  );
};

export default LoginButton;
