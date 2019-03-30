import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header_container">
      <span className="navigation_title">Kanban</span>
      <FontAwesomeIcon icon={faUserCircle} className="user_icon" />
    </div>
  );
};

export default Header;
