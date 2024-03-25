import Button from "../Utilities/Button";
import styles from "../../styles/banners/heroBanner1.module.css";

export default function HeroBanner1({ backgroundSrc }) {
  return (
    <div className={styles.HeroBanner1}>
      <img src={backgroundSrc} alt="HeroBannerBackground not found" />
      <div>
        <img
          src="./src/media/banners/banner1/apex-legends-breakout-logo.svg"
          alt="Apex Legends logo not found"
        />
        <Button className={styles.CustomButton} buttonText={"Play Now"} />
      </div>
    </div>
  );
}
