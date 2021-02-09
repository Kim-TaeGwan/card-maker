// import { BrowserRouter } from "react-router-dom";
// import Routes from "./Routes";

import LoginPage from "./components/LoginComponent";

function App({ authService }) {
  return (
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
    <LoginPage authService={authService} />
  );
}

export default App;
