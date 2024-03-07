import { useState } from "react";
import "../../styles/header/darkbar.css";
import DarkBarWrapper from "./DarkBarItem";

export default function DarkBar() {
  const [showContent, setShowContent] = useState("");

  function handleContent(content) {
    setShowContent(content);
  }

  return (
    <div className="darkbar">
      <span className="btnDarkMenu">
        <img
          onClick={() => {
            handleContent("profile");
          }}
          className="profile-icon"
          src="./src/Media/header/svg/profile-icon.svg"
          alt="Profile"
        />
      </span>
      <span className="btnDarkMenu">
        <img
          onClick={() => {
            handleContent("help");
          }}
          className="help-icon"
          src="./src/Media/header/svg/question-icon.svg"
          alt="Question Mark"
        />
      </span>
      <span className="btnDarkMenu">
        <img
          className="logo-icon"
          src="./src/media/header/svg/logo-icon.svg"
          alt="EA Logo"
        />
      </span>
      <span className="overlay"></span>
      <DarkBarWrapper showContent={showContent} />
    </div>
  );
}
