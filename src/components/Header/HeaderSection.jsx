import HeaderDarkbar from "./HeaderDarkbar";
import HeaderLightbar from "./HeaderLightbar";
import useScroll from "../../utils/useScroll,jsx";
import "../../styles/header/header.css";

export default function HeaderSection() {
  const { scrollDirection, scrollHeight } = useScroll();

  return (
    <header
      className={`header ${
        scrollHeight > 0 && scrollDirection === "down" ? "scroll-down" : ""
      }`}
    >
      <HeaderDarkbar />
      <HeaderLightbar />
    </header>
  );
}
