import * as React from "react";
import { User } from "../../api/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SwimmingLane.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DragSource, ConnectDragSource } from "react-dnd";

interface IProps {
  connectDragSource: ConnectDragSource;
  isDragging: boolean;
  user: User;
}

const itemSource =  {
  beginDrag(props: IProps) {
    return props.user;
  },
  endDrag(props: IProps, monitor: any, component: any) {
    if(!monitor.didDrop()) {
      return;
    }
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}


const SwimmingLaneRow: React.FC<IProps> = ({ user, connectDragSource, isDragging }) => {
  const opacity = isDragging ? 0.3 : 1;

  return connectDragSource(
    <div className="swimminglane-row-container" style={{ opacity }}>
      <img src={user.thumbnail} className="thumbnail" />
      <div className="info">
        <span>{user.name} {user.id} <span className="rating"><FontAwesomeIcon icon={faStar}/> {user.rating}</span></span>
        <span>{`${user.age} y/o - ${user.sex} - ${user.location}`}</span>
      </div>
    </div>
  );
};

export default DragSource('user', itemSource, collect)(SwimmingLaneRow);

