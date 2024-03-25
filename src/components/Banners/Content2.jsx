import { useEffect, useState } from "react";
import FindCorrectImageSource from "../../services/imageSrcFinder";
import HeroBanner2 from "./HeroBanner2";
import SmallBanner2 from "./SmallBanner2";

export default function Content2() {
  const HeroBannerSrc = [
    { width: 320, src: "./src/media/banners/banner2/ea-play-grid-320w.jpg" },
    { width: 767, src: "./src/media/banners/banner2/ea-play-grid-767w.jpg" },
    { width: 1023, src: "./src/media/banners/banner2/ea-play-grid-1023w.jpg" },
    { width: 1455, src: "./src/media/banners/banner2/ea-play-grid-1455w.jpg" },
    { width: Number.POSITIVE_INFINITY, src: "./src/media/banners/banner2/ea-play-grid-1920w.jpg"}
  ];
  const SmallBannerSrc = [
    { width: 320, src: "./src/media/banners/banner2/ea320w.jpg" },
    { width: 768, src: "./src/media/banners/banner2/ea768w.jpg" },
    { width: 1024, src: "./src/media/banners/banner2/ea1024w.jpg" },
    { width: 1456, src: "./src/media/banners/banner2/ea1456w.jpg" },
    { width: Number.POSITIVE_INFINITY, src: "./src/media/banners/banner2/ea1920w.jpg"}
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
      <HeroBanner2
        backgroundSrc={heroBannerSrc}
        logoSrc="./src/media/banners/banner1/apex-legends-breakout-logo.svg"
        pText={"Don’t just get the game. Get more from your game. Unlock exclusive rewards, members-only content, and a library of top titles."}
      />
      <SmallBanner2 backgroundSrc={smallBannerSrc} text={"Players and Parents: Video game control is in your hands"} />
    </div>
  );
}