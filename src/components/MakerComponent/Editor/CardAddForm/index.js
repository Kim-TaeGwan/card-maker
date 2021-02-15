import React, { useRef } from "react";
import Button from "../Button";
import ImageFileInput from "../ImageFileInput";

import styles from "./CardAddForm.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        name="name"
        ref={nameRef}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Company"
        name="company"
        ref={companyRef}
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="Title"
        name="title"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        placeholder="Message"
        name="message"
        ref={messageRef}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
