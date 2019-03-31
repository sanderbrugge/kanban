import * as React from 'react';
import IconButton from '../IconButton';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import './SwimmingLane.scss';

interface IProps {
  name: string;
  itemsInLane: number;
  deleteAction: () => void;
}

const SwimmingLaneHeader: React.FC<IProps> = ({ name, itemsInLane, deleteAction }) => {
  return (
    <div className="swimminglane-header-container">
        <span className="title">
          {name}
          <span className="items">({itemsInLane})</span>
        </span>
        <IconButton className={"actions"} icon={faEllipsisH} onClick={deleteAction}/>
    </div>
  );
}

export default SwimmingLaneHeader;
