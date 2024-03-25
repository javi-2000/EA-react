import Button from "../Utilities/Button";
import "./styles/banners/heroBanner1.css";


export default function HeroBanner1({ backgroundSrc }) {
  return (
    <div className="HeroBanner1">
      <img
        className="backgroundclass"
        src={backgroundSrc}
        alt="HeroBannerBackground not found"
      />
      <div>
        <img
          src="./src/media/banners/banner1/apex-legends-breakout-logo.svg"
          alt="Apex Legends logo not found"
        />
        <Button className="CustomButton" buttonText={"Play Now"} />
      </div>
    </div>
  );
}
