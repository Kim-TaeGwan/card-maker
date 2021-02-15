import React from "react";
import Button from "../Button";
import ImageFileInput from "../ImageFileInput";

import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card, onChange }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;
  const onSubmit = () => {};
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
      />
      <select className={styles.select} name="theme" value={theme}>
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
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
        value={email}
      />
      <textarea
        className={styles.textarea}
        placeholder="Message"
        name="message"
        value={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
