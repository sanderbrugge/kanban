import * as React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import IconButton from "../IconButton/IconButton";
import { GITHUB_REPO_URL } from "../../const";

const Header: React.FC = () => (
  <div className="header_container">
    <span className="navigation_title">Kanban</span>
    <IconButton
      href={GITHUB_REPO_URL}
      icon={faUserCircle}
      title={"Sander Brugge"}
      className={"user_icon"}
    />
  </div>
);

export default Header;
