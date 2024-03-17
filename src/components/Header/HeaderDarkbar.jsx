import { useState } from "react";
import "../../styles/header/darkbar.css";
import DarkbarWrapper from "./HeaderDarkbarWrapper";
import { ProfileIcon, HelpIcon, LogoIcon } from "./HeaderDarkbarIcons";

export default function HeaderDarkbar() {
  const [showContent, setShowContent] = useState("");
  const [showDarkbar, setShowDarkbar] = useState(false);

  function handleContent(content) {
    setShowContent(content);
    setShowDarkbar(true);
  }

  function handleClose() {
    setShowDarkbar(false);
  }

  return (
    <div className="darkbar">
      <span
        className="btnDarkMenu"
        onClick={() => {
          handleContent("profile");
        }}
      >
        <ProfileIcon />
      </span>
      <span
        className="btnDarkMenu"
        onClick={() => {
          handleContent("help");
        }}
      >
        <HelpIcon />
      </span>
      <span className="btnDarkMenu">
        <LogoIcon />
      </span>
      {showDarkbar && <span className="overlay" onClick={handleClose}></span>}
      <DarkbarWrapper
        showContent={showContent}
        showDarkbar={showDarkbar}
        handleClose={handleClose}
      />
    </div>
  );
}
