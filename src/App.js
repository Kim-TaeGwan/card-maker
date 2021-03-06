import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/MakerComponent";
import Login from "./components/LoginComponent";
import styles from "./App.module.css";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/card-maker">
            <Login authService={authService} />
          </Route>
          <Route path="/card-maker/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
