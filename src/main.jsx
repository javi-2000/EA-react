import React from "react";
import ReactDOM from "react-dom/client";
import HeaderSection from "./components/Header/HeaderSection";
import Terms from "./components/Terms/Terms"
import TopFooter from "./components/Footer/TopFooter/TopFooter";

import "./styles/common/reset.css";
import "./styles/common/fonts.css";
import "./styles/common/root.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderSection />
    <Terms/>
    <TopFooter/>
  </React.StrictMode>
);

