import * as React from "react";
import SwimmingLaneHeader from "./SwimmingLaneHeader";

const SwimmingLane: React.FC = () => {
  return <SwimmingLaneHeader name={"Test"} itemsInLane={20} deleteAction={() => console.log('open ellipsis')}  />;
};

export default SwimmingLane;
