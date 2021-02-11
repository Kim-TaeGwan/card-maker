import React from "react";

import styles from "./Item.module.css";

const Item = ({ onChange, company, title, email, message, name }) => {
  return (
    <div className={styles.item}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        onChange={onChange}
        value={company}
      />
      <select name="color">
        <option>Light</option>
        <option>Dark</option>
        <option>Colorful</option>
      </select>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={onChange}
        value={title}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      <input
        type="text"
        name="message"
        placeholder="Message"
        onChange={onChange}
        value={message}
      />
      <div>
        <button>No file</button>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Item;
