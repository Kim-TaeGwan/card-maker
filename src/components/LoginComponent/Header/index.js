import React from "react";

import logo from "../../../assets/images/logo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" width="50px" height="30px" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
