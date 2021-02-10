import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/MakerComponent";
import Login from "./components/LoginComponent";
import styles from "./App.module.css";
// import LoginPage from "./components/LoginComponent";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/maker" exact>
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    // <div className={styles.app}>
    //   <LoginPage authService={authService} />
    // </div>
  );
}

export default App;
