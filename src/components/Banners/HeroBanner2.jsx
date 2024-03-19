import Button from "../Utilities/Button";

export default function HeroBanner2({
  backgroundClassName,
  backgroundSrc,
  logoSrc,
  pText,
}) {
  return (
    <div className="HeroBanner2">
      <img
        className={backgroundClassName}
        src={backgroundSrc}
        alt="HeroBanner2 Background not found"
      />
      <div>
        <img src={logoSrc} alt="EA logo not found" />
        <p>
          {pText}
        </p>
        <Button className={"ButtonBanner2"} buttonText={"Play Now"} />
      </div>
    </div>
  );
}
