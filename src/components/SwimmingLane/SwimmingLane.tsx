import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";
import { SwimmingLane, User } from "../../api/interfaces";
import SwimmingLaneRow from "./SwimmingLaneRow";
import { DropTarget, ConnectDropTarget } from "react-dnd";
import { connect } from "react-redux";
import { actions as swimmingLaneActions } from "../../ducks/SwimmingLaneDuck";

interface IProps {
  connectDropTarget: ConnectDropTarget;
  hovered: boolean;
  item: User;
  data: SwimmingLane;
  swapUser: (user: User, toLane: SwimmingLane) => void;
}

function collect(connect: any, monitor: any) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

const swimmingLaneTarget = {
  drop(props: IProps, monitor: any) {
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
        data.users.map(user => (
          <SwimmingLaneRow
            key={user.id}
            user={user}
          />
        ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  swapUser: (user: User, toLane: SwimmingLane) =>
    dispatch(swimmingLaneActions.swapUser(user, toLane))
});

export default connect(
  null,
  mapDispatchToProps
)(DropTarget("user", swimmingLaneTarget, collect)(SwimmingLaneContainer));
