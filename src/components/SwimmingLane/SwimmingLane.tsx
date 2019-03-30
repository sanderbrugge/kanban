import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";

const SwimmingLane: React.FC = () => {
  return (
    <div className="swimminglane-container">
      <SwimmingLaneHeader
        name={"Test"}
        itemsInLane={20}
        deleteAction={() => console.log("open ellipsis")}
      />
    </div>
  );
};

export default SwimmingLane;
