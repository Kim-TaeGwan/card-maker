import React, { useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./Maker.module.css";

import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const MakerComponent = ({ authService }) => {
  let history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section>main</section>
      <Footer />
    </section>
  );
};

export default MakerComponent;
