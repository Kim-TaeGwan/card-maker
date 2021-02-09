// import { BrowserRouter } from "react-router-dom";
// import Routes from "./Routes";
import styles from "./App.module.css";
import LoginPage from "./components/LoginComponent";

function App({ authService }) {
  return (
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
    <div className={styles.app}>
      <LoginPage authService={authService} />
    </div>
  );
}

export default App;
