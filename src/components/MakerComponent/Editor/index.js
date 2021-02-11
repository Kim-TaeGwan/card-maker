import React from "react";

import styles from "./Editor.module.css";
import CardEditForm from "./CardEditForm";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(card => (
        <CardEditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
