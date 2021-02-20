import React from "react";

import styles from "./Editor.module.css";
import CardEditForm from "./CardEditForm";
import CardAddForm from "./CardAddForm";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((
        key // cards는 배열이 아닌 객체형태이기때문에 Obeject.keys를 사용한다
      ) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
