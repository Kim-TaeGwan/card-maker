import React, { useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./Maker.module.css";

import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Editor from "./Editor";
import Preview from "./Preview";

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
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default MakerComponent;
