import React from "react";
import Button from "../Button";
import ImageFileInput from "../ImageFileInput";

import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    // fileName,
    // fileURL,
  } = card;
  const onChange = event => {
    if (event.currentTarget == null) {
      // 만약 이벤트에 지금 onChange가 발생하고 있는 currentTarget이 null 이라면 아무것도 안해 줌
      return;
    }

    event.preventDefault(); // currentTarget이 있다면 preventDefault()를 이용해서 브라우저에 기본적인 이벤트를 처리하지 않도록 한다.

    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Company"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        placeholder="Message"
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
