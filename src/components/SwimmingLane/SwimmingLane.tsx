import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";
import { SwimmingLane } from "../../api/interfaces";
import SwimmingLaneRow from "./SwimmingLaneRow";

interface IProps {
  data: SwimmingLane;
}

const SwimmingLaneContainer: React.FC<IProps> = ({ data }) => {
  return (
    <div className="swimminglane-container">
      <SwimmingLaneHeader
        name={data.title}
        itemsInLane={data.users.length}
        deleteAction={() => console.log("open ellipsis")}
      />
      {data.users && data.users.map(user => <SwimmingLaneRow key={user.id} user={user} />)}
    </div>
  );
};

export default SwimmingLaneContainer;
