import React from "react";
import ReactDOM from "react-dom/client";
import HeaderSection from "./components/Header/HeaderSection";
import CardHeader from "./components/Cards/CardHeader";
import Content1 from "./components/Banners/Content1";
import Content2 from "./components/Banners/Content2";


import "./styles/common/reset.css";
import "./styles/common/fonts.css";
import "./styles/common/root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderSection/>
    <Content1/>
    <CardHeader/>
    <Content2/>
  </React.StrictMode>
);

