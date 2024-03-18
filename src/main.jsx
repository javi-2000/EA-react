import React from "react";
import ReactDOM from "react-dom/client";
import HeaderSection from "./components/Header/HeaderSection";
import HeroBanner1 from "./components/Banners/HeroBanner1";
import CardHeader from "./components/Cards/CardHeader";

import "./styles/common/reset.css";
import "./styles/common/fonts.css";
import "./styles/common/root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderSection/>
    <HeroBanner1 backgroundSrc="./src/media/banners/banner1/apex-1920w.jpg" logoSrc="./src/media/banners/banner1/apex-legends-breakout-logo.svg" />
    <CardHeader/>
  </React.StrictMode>
);

