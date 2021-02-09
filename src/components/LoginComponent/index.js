import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Login.module.css";
import LoginButton from "./LoginButton";

const LoginComponent = ({ authService }) => {
  const onLoading = e => {
    // console.log(e.currentTarget.textContent);   e.currentTarget.textContent는 태그안에 텍스트
    authService.login(e.currentTarget.textContent).then(console.log);
  };
  const logout = () => {
    console.log("logout");
  };
  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.body}>
        <button className={styles.logout} onClick={logout}>
          Logout
        </button>
        <h1 className={styles.loginTitle}>Login</h1>
        <ul>
          <LoginButton ButtonName="Google" loginClick={onLoading} />
          <LoginButton ButtonName="Github" loginClick={onLoading} />
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default LoginComponent;
