import { X } from "@phosphor-icons/react";
import DarkbarProfile from "./HeaderDarkbarProfile";
import DarkbarHelp from "./HeaderDarkbarHelp";

export default function DarkbarWrapper({
  showContent,
  showDarkbar,
  handleClose,
}) {
  return (
    <div className={`darkbar-wrapper ${showDarkbar ? "isActive" : ""}`}>
      <span className="btn-close" onClick={handleClose}>
        <X size={15} weight="bold" />
      </span>
      {showContent === "profile" ? <DarkbarProfile /> : <DarkbarHelp />}
    </div>
  );
}
