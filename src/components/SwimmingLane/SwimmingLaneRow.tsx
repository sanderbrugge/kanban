import * as React from "react";
import { User } from "../../api/interfaces";

interface IProps {
  user: User;
}

const SwimmingLaneRow: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </>
  );
};

export default SwimmingLaneRow;
