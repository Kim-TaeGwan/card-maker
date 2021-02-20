import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import styles from "./Maker.module.css";

import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Editor from "./Editor";
import Preview from "./Preview";

const MakerComponent = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "Dark",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      fileName: "ellie",
      // fileURL: "ellie.png",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "Bob",
      company: "Uber",
      theme: "Light",
      title: "senior Software Engineer",
      email: "bog@uber.com",
      message: "I love coding",
      fileName: "bob",
      fileURL: "bob.png",
    },
    3: {
      id: 3,
      name: "Cris",
      company: "Instagram",
      theme: "Colorful",
      title: "Product Manager",
      email: "christ@instagram.com",
      message: "Design your dream",
      fileName: "cris",
      // fileURL: "cris.png",
      fileURL: null,
    },
  });
  let history = useHistory();
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
      updated[card.id] = card; // updated의 키인 card.id를 card로 변경한다
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
