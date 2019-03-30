import * as React from "react";
import { User } from "../../api/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SwimmingLane.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  user: User;
}

const SwimmingLaneRow: React.FC<IProps> = ({ user }) => {
  return (
    <div className="swimminglane-row-container">
      <img src={user.thumbnail} className="thumbnail" />
      <div className="info">
        <span>{user.name}<span className="rating"><FontAwesomeIcon icon={faStar}/> {user.rating}</span></span>
        <span>{`${user.age} y/o - ${user.sex} - ${user.location}`}</span>
      </div>
    </div>
  );
};

export default SwimmingLaneRow;
