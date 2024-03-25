import { useState } from "react";
import "../../styles/header/darkbar.css";
import DarkbarWrapper from "./HeaderDarkbarWrapper";
import { ProfileIcon, HelpIcon, LogoIcon } from "./HeaderDarkbarIcons";
import { Helmet } from "react-helmet";

export default function HeaderDarkbar() {
  const [showContent, setShowContent] = useState("");
  const [showDarkbar, setShowDarkbar] = useState(false);

  function handleContent(content) {
    setShowContent(content);
    setShowDarkbar(true);
  }

  function handleClose() {
    setShowContent("");
    setShowDarkbar(false);
  }

  return (
    <div className="darkbar">
      <Helmet>
        <body className={`darkbar ${showDarkbar ? "scroll-lock" : ""}`} />
      </Helmet>
      <div className="topIcons">
        <span
          className={`btnDarkMenu ${
            showContent === "profile" ? "isActive" : ""
          }`}
          onClick={() => {
            handleContent("profile");
          }}
        >
          <ProfileIcon />
        </span>
        <span
          className={`btnDarkMenu ${showContent === "help" ? "isActive" : ""}`}
          onClick={() => {
            handleContent("help");
          }}
        >
          <HelpIcon />
        </span>
        <span className="btnDarkMenu">
          <LogoIcon />
        </span>
      </div>
      {showDarkbar && <span className="overlay" onClick={handleClose}></span>}
      <DarkbarWrapper
        showContent={showContent}
        showDarkbar={showDarkbar}
        handleClose={handleClose}
      />
    </div>
  );
}
