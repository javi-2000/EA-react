import "../../styles/header/lightbar.css";
import HeaderLightbarLogo from "./HeaderLightbarLogo";

export default function HeaderLightbar() {
  return (
    <div className="lightbar">
      <div className="lightbar-container">
        <div className="lateral-menu">
          <span className="btn-open btn-desktop">
            <span className="kebab-icon"></span>
          </span>
          <span className="btn-open btn-mobile">
            <span className="burger-icon"></span>
          </span>
        </div>

        {/* logo */}
        <HeaderLightbarLogo className="logo" />
      </div>

      {/* menu */}
      {/* ${await HeaderLightbarItem()} */}
    </div>
  );
}
