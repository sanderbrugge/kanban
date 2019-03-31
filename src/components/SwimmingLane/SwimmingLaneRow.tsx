import * as React from "react";
import { User } from "../../api/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SwimmingLane.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DragSource, ConnectDragSource } from "react-dnd";

interface IProps {
  connectDragSource: ConnectDragSource;
  user: User;
}

const itemSource =  {
  beginDrag(props: any) {
    return props.item;
  },
  endDrag(props: any, monitor: any, component: any) {
    if(!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.item.id);
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}


const SwimmingLaneRow: React.FC<IProps> = ({ user, connectDragSource }) => {

  return connectDragSource(
    <div className="swimminglane-row-container">
      <img src={user.thumbnail} className="thumbnail" />
      <div className="info">
        <span>{user.name} <span className="rating"><FontAwesomeIcon icon={faStar}/> {user.rating}</span></span>
        <span>{`${user.age} y/o - ${user.sex} - ${user.location}`}</span>
      </div>
    </div>
  );
};


export default DragSource('row', itemSource, collect)(SwimmingLaneRow);

