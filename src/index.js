import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";

import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";
import ImageFileInput from "./components/MakerComponent/Editor/ImageFileInput";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
