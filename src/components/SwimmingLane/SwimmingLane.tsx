import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";
import { SwimmingLane, User } from "../../api/interfaces";
import SwimmingLaneRow from "./SwimmingLaneRow";
import {
  DropTarget,
  ConnectDropTarget,
  DropTargetConnector,
  DropTargetMonitor
} from "react-dnd";
import { connect } from "react-redux";
import { actions as swimmingLaneActions } from "../../ducks/SwimmingLaneDuck";
import { createNewMockUser } from "../../util/createMockUser";

interface IProps {
  connectDropTarget: ConnectDropTarget;
  hovered: boolean;
  item: User;
  data: SwimmingLane;
  swapUser: (user: User, toLane: SwimmingLane) => void;
  addUser: (user: User, toLaneId: string) => void;
}

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

const swimmingLaneTarget = {
  drop(props: IProps, monitor: DropTargetMonitor) {
    const item = monitor.getItem();
    const column = props.data;

    if (item) {
      props.swapUser(item, column);
    }
  }
};

const SwimmingLaneContainer: React.FC<IProps> = ({
  data,
  connectDropTarget,
  hovered,
  addUser
}) => {
  const addUserToLane = React.useCallback(
    () => addUser(createNewMockUser(), data.id),
    [data]
  );
  const opacity = hovered ? 0.5 : 1;

  return connectDropTarget(
    <div className="swimminglane-container" style={{ opacity }}>
      <SwimmingLaneHeader
        name={data.title}
        itemsInLane={data.users.length}
        addAction={addUserToLane}
      />
      {data.users &&
        data.users.map(user => <SwimmingLaneRow key={user.id} user={user} />)}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  swapUser: (user: User, toLane: SwimmingLane) =>
    dispatch(swimmingLaneActions.swapUser(user, toLane)),
  addUser: (user: User, toLaneId: string) =>
    dispatch(swimmingLaneActions.addUser(user, toLaneId))
});

export default connect(
  null,
  mapDispatchToProps
)(DropTarget("user", swimmingLaneTarget, collect)(SwimmingLaneContainer));
