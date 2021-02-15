import React from "react";

import styles from "./Editor.module.css";
import CardEditForm from "./CardEditForm";
import CardAddForm from "./CardAddForm";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(card => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
