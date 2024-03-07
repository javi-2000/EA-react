import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import "./Styles/Common/reset.css";
import "./Styles/Common/root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
