import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./styles/common/reset.css";
import "./styles/common/fonts.css";
import "./styles/common/root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
