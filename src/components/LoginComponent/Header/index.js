import React from "react";

import logo from "../../../assets/images/logo.png";

import styles from "./Header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}

      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
