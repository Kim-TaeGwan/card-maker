import React from "react";

import styles from "./Card.module.css";

// import defaultImg from "../../../../assets/images/default_logo.png";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="profile" className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "Dark":
      return styles.dark;
    case "Light":
      return styles.light;
    case "Colorful":
      return styles.colorful;
    default:
      // 다 아니고 이제 무언가 잘못 데이터를 받았거나 우리가 제대로 핸들링을 안해 줬을때, unknown theme 경우에서 어떤 것을 우리가 모르는지 이렇게 에러메시지를 자세히 한다
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
