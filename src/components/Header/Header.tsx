import * as React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import IconButton from "../IconButton/IconButton";

const Header: React.FC = () => {
  return (
    <div className="header_container">
      <span className="navigation_title">Kanban</span>
      <IconButton
        icon={faUserCircle}
        onClick={() => console.log("clicked")}
        title={"Sander Brugge"}
        className={"user_icon"}
      />
    </div>
  );
};

export default Header;
