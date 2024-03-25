import Button from "../Utilities/Button";

export default function HeroBanner2({ backgroundClassName, backgroundSrc }) {
  return (
    <div className="HeroBanner2">
      <img
        className={backgroundClassName}
        src={backgroundSrc}
        alt="HeroBanner2 Background not found"
      />
      <div>
        <img
          src="./src/media/banners/banner2/ea-play-logo-small.svg"
          alt="EA logo not found"
        />
        <p>
          "Don’t just get the game. Get more from your game. Unlock exclusive
          rewards, members-only content, and a library of top titles."
        </p>
        <Button className={"ButtonBanner2"} buttonText={"Play Now"} />
      </div>
    </div>
  );
}
