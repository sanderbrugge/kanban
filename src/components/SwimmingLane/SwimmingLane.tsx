import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";
import { SwimmingLane, User } from "../../api/interfaces";
import SwimmingLaneRow from "./SwimmingLaneRow";
import { DropTarget, ConnectDropTarget } from "react-dnd";

interface IProps {
  connectDropTarget: ConnectDropTarget;
  hovered: boolean;
  item: User;
  data: SwimmingLane;
}

function collect(connect: any, monitor: any) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

const SwimmingLaneContainer: React.FC<IProps> = ({
  data,
  connectDropTarget,
  hovered,
  item
}) => {
  const opacity = hovered ? 0.6 : 1;
  
  return connectDropTarget(
    <div className="swimminglane-container" style={{ opacity }}>
      <SwimmingLaneHeader
        name={data.title}
        itemsInLane={data.users.length}
        deleteAction={() => console.log("open ellipsis")}
      />
      {data.users &&
        data.users.map(user => <SwimmingLaneRow key={user.id} user={user} handleDrop={(id: number) => console.log(`dropped ${id}`)} />)}
    </div>
  );
};

export default DropTarget("user", {}, collect)(SwimmingLaneContainer);
