import React, { useCallback, useState } from "react";

import Cards from "../../../service/cards";

import styles from "./Editor.module.css";
import Item from "./Item";

const Editor = () => {
  const [inputs, setInputs] = useState({
    company: "",
    title: "",
    email: "",
    message: "",
    name: "",
  });

  const { company, title, email, message, name } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  }, []);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Cards.map(card => (
        <Item
          key={card.id}
          onChange={onChange}
          company={card.company}
          name={card.name}
          title={card.title}
          email={card.email}
          message={card.message}
        />
      ))}
      <Item
        onChange={onChange}
        company={company}
        name={name}
        title={title}
        email={email}
        message={message}
      />
    </section>
  );
};

export default Editor;
