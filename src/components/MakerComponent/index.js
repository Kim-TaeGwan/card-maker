import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import styles from "./Maker.module.css";

import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Editor from "./Editor";
import Preview from "./Preview";

const MakerComponent = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "Dark",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Ellie2",
      company: "Samsung",
      theme: "Light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    3: {
      id: "3",
      name: "Ellie3",
      company: "Samsung",
      theme: "Colorful",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default MakerComponent;
