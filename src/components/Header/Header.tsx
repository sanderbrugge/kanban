import * as React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import IconButton from "../IconButton/IconButton";

const Header: React.FC = () => {
  return (
    <div className="header_container">
      <span className="navigation_title">Kanban</span>
      <IconButton
        href={'https://github.com/sanderbrugge?utf8=%E2%9C%93&tab=repositories&q=&type=public&language='}
        icon={faUserCircle}
        title={"Sander Brugge"}
        className={"user_icon"}
      />
    </div>
  );
};

export default Header;
