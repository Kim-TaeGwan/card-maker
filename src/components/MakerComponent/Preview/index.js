import React from "react";

import Cards from "../../../service/cards";

import Item from "./Item";
import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {Cards.map(card => (
        <Item
          key={card.id}
          name={card.name}
          company={card.company}
          title={card.title}
          email={card.email}
          message={card.message}
        />
      ))}
    </section>
  );
};

export default Preview;
