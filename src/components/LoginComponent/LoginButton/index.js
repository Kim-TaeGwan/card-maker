import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = ({ ButtonName, loginClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={loginClick}>
        {ButtonName}
      </button>
    </li>
  );
};

export default LoginButton;
