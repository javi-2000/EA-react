import HeaderDarkbar from "./HeaderDarkbar";
import HeaderLightbar from "./HeaderLightbar";
import "../../styles/header/header.css";

export default function HeaderSection() {
  return (
    <header className="header">
      <HeaderDarkbar />
      <HeaderLightbar />
    </header>
  );
}
