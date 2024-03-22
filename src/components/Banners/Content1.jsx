import { useEffect, useState } from "react";
import FindCorrectImageSource from "../../services/imageSrcFinder";
import HeroBanner1 from "./HeroBanner1";
import SmallBanner1 from "./SmallBanner1";

export default function Content1() {
  const HeroBannerSrc = [
    { width: 320, src: "./src/media/banners/banner1/apex-320w.jpg" },
    { width: 768, src: "./src/media/banners/banner1/apex-768w.jpg" },
    { width: 1024, src: "./src/media/banners/banner1/apex-1024w.jpg" },
    { width: 1456, src: "./src/media/banners/banner1/apex-1456w.jpg" },
    {
      width: Number.POSITIVE_INFINITY,
      src: "./src/media/banners/banner1/apex-1920w.jpg",
    },
  ];
  const SmallBannerSrc = [
    { width: 320, src: "./src/media/banners/banner1/wrc-320w.jpg" },
    { width: 768, src: "./src/media/banners/banner1/wrc-768w.jpg" },
    { width: 920, src: "./src/media/banners/banner1/wrc-1024w.jpg" },
    { width: 1024, src: "./src/media/banners/banner1/wrc-1024w.jpg" },
    { width: 1456, src: "./src/media/banners/banner1/wrc-1456w.jpg" },
    {
      width: Number.POSITIVE_INFINITY,
      src: "./src/media/banners/banner1/wrc-1920w.jpg",
    },
  ];

  const [heroBannerSrc, setHeroBannerSrc] = useState("");
  const [smallBannerSrc, setSmallBannerSrc] = useState("");

  const handleHeroResize = (sourceArray) => {
    setHeroBannerSrc(FindCorrectImageSource(sourceArray));
  
  };

  const handleSmallResize = (sourceArray) => {
    setSmallBannerSrc(FindCorrectImageSource(sourceArray));
  }

  useEffect(() => {
    window.addEventListener("load", () => {
      handleHeroResize(HeroBannerSrc);
      handleSmallResize(SmallBannerSrc);
    });
    window.addEventListener("resize", () => {
      handleHeroResize(HeroBannerSrc);
      handleSmallResize(SmallBannerSrc);
    });
    return () => {
      window.removeEventListener("resize", () => {
        handleHeroResize(HeroBannerSrc);
        handleSmallResize(SmallBannerSrc);
      });
    };
  }, []);

  return (
    <div>
      <HeroBanner1
        backgroundSrc={heroBannerSrc}
        logoSrc="./src/media/banners/banner1/apex-legends-breakout-logo.svg"
      />
      <SmallBanner1 backgroundSrc={smallBannerSrc} text={"LEARN MORE ABOUT EA SPORTS™ WRC SEASON 3"} />
    </div>
  );
}
