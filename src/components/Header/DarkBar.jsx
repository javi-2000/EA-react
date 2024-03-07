import { useState } from "react";
import "../../styles/header/darkbar.css";

function DarkBarWrapperItem({ link, img, alt, text }) {
  return (
    <div className="darkbar-wrapper-item">
      <a href={link}>
        <img src={img} className="icon" alt={alt} />
        <p>{text}</p>
      </a>
    </div>
  );
}

function DarkBarProfile() {
  return (
    <div className="icons">
      <div className="item-group">
        <DarkBarWrapperItem
          link="https://signin.ea.com/p/juno/login?execution=e206671001s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26display%3DjunoWeb%2Flogin%26response_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Fwww.ea.com%2Flogin_check%26locale%3Den_US%26client_id%3DEADOTCOM-WEB-SERVER"
          img="./src/Media/header/svg/signin-icon.svg"
          alt="A profile pic."
          text="Sign In"
        />
        <DarkBarWrapperItem
          link="https://signin.ea.com/p/juno/create?execution=e206671003s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26display%3DjunoWeb%2Fcreate%26response_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Fwww.ea.com%2Flogin_check%26locale%3Den_US%26client_id%3DEADOTCOM-WEB-SERVER"
          img="./src/Media/header/svg/register-icon.svg"
          alt="A profile pic with a plus sign."
          text="Create Account"
        />
      </div>
    </div>
  );
}

function DarkBarHelp() {
  return (
    <>
      <p className="bold">NEED HELP?</p>
      <div className="icons">
        <div className="item-group">
          <DarkBarWrapperItem
            link="https://help.ea.com/en/help/account/ea-login-verification-information/"
            img="./src/Media/header/svg/medallion-icon.svg"
            alt="A circle with an EA logo."
            text="Verify my EA Login"
          />
          <DarkBarWrapperItem
            link="https://help.ea.com/en/help/account/link-your-console-accounts/"
            img="./src/Media/header/svg/link-icon.svg"
            alt="A round square with chains."
            text="Linking your platform accounts to your EA Account"
          />
        </div>
        <div className="item-group">
          <DarkBarWrapperItem
            link="https://help.ea.com/en/help/faq/redeem-product-and-promotional-codes/"
            img="./src/Media/header/svg/medallion-icon.svg"
            alt="A circle with an EA logo."
            text="How do I redeem a Code?"
          />
          <DarkBarWrapperItem
            link="https://help.ea.com/en/help/faq/connection-troubleshooting-basic/"
            img="./src/Media/header/svg/alert-icon.svg"
            alt="A round square with a triangle with an exclamation mark inside."
            text="I can't play online!"
          />
        </div>
      </div>
      <p>
        Can't find what you're looking for? Go to{" "}
        <a href="https://help.ea.com/en/help-home/">EA Help</a>,{" "}
        <a href="https://answers.ea.com/t5/Answer-HQ-English/ct-p/AHQ-English">
          Answers HQ
        </a>{" "}
        or <a href="https://www.ea.com/forums">EA Forums</a>
      </p>
    </>
  );
}

function DarkBarWrapper({ showContent }) {
  return (
    <div className="darkbar-wrapper isActive">
      <span className="btn-close"></span>
      {showContent === "profile" ? <DarkBarProfile /> : <DarkBarHelp />}
    </div>
  );
}

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
