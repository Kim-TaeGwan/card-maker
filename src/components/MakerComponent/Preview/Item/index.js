import React from "react";

import styles from "./Item.module.css";

import defaultImg from "../../../../assets/images/default_logo.png";

const Item = ({ name, company, title, email, message }) => {
  return (
    <div className={styles.item}>
      <div>
        <img src={defaultImg} alt="img" />
      </div>
      <div>
        <p>{name}</p>
        <p>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Item;
