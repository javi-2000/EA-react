import DarkbarWrapperItem from "./HeaderDarkbarItem";

export default function DarkbarHelp() {
  return (
    <div className="help-text">
      <p className="bold">NEED HELP?</p>
      <div className="icons">
        <div className="item-group">
          <DarkbarWrapperItem
            link="https://help.ea.com/en/help/account/ea-login-verification-information/"
            img="./src/Media/header/svg/medallion-icon.svg"
            alt="A circle with an EA logo."
            text="Verify my EA Login"
          />
          <DarkbarWrapperItem
            link="https://help.ea.com/en/help/account/link-your-console-accounts/"
            img="./src/Media/header/svg/link-icon.svg"
            alt="A round square with chains."
            text="Linking your platform accounts to your EA Account"
          />
        </div>
        <div className="item-group">
          <DarkbarWrapperItem
            link="https://help.ea.com/en/help/faq/redeem-product-and-promotional-codes/"
            img="./src/Media/header/svg/medallion-icon.svg"
            alt="A circle with an EA logo."
            text="How do I redeem a Code?"
          />
          <DarkbarWrapperItem
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
    </div>
  );
}
