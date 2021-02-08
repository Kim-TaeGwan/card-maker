import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = ({ ButtonName }) => {
  return <button className={styles.button}>{ButtonName}</button>;
};

export default LoginButton;
