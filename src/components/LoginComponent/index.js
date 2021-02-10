import React, { useEffect } from "react";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

import styles from "./Login.module.css";
import LoginButton from "./LoginButton";
import { useHistory } from "react-router";

const LoginComponent = ({ authService }) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = e => {
    // console.log(e.currentTarget.textContent);   e.currentTarget.textContent는 태그안에 텍스트
    authService
      .login(e.currentTarget.textContent)
      // .then(console.log)
      .then(data => goToMaker(data.user.uid)); // console.log()를 찍어보면 object안에 user안에 uId(유니크id)를 이용하여 데이터를 저장할 것
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid); // 이미 로그인을 했다면 goToMaker()함수 실행되서 /maker로 이동
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <LoginButton ButtonName="Google" loginClick={onLogin} />
          <LoginButton ButtonName="Github" loginClick={onLogin} />
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default LoginComponent;
