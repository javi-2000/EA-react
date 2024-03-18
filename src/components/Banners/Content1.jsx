import { useEffect, useState } from "react";
import FindCorrectImageSource from "../../services/imageSrcFinder";
import HeroBanner1 from "./HeroBanner1";

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
  const underHeroBannerSrc = [
    { width: 320, src: "./src/media/banners/banner1/wrc-320w.jpg" },
    { width: 767, src: "./src/media/banners/banner1/wrc-768w.jpg" },
    { width: 920, src: "./src/media/banners/banner1/wrc-1024w.jpg" },
    { width: 1024, src: "./src/media/banners/banner1/wrc-1024w.jpg" },
    { width: 1456, src: "./src/media/banners/banner1/wrc-1456w.jpg" },
    {
      width: Number.POSITIVE_INFINITY,
      src: "./src/media/contents/banner1/wrc-1920w.jpg",
    },
  ];

  const [heroBannerSrc,setHeroBannerSrc] = useState('');
  
  const handleResize = (sourceArray) => {
    setHeroBannerSrc(FindCorrectImageSource(sourceArray))
  }

  useEffect(() => {
    window.addEventListener('load',handleResize(HeroBannerSrc) )
    window.addEventListener('resize', () => handleResize(HeroBannerSrc));    
    return () => {
        window.removeEventListener("resize", () => handleResize(HeroBannerSrc));
      };
  },[])

  return (
    <div>
      <HeroBanner1
        backgroundSrc={heroBannerSrc}
        logoSrc="./src/media/banners/banner1/apex-legends-breakout-logo.svg"
      />
    </div>
  );
}
