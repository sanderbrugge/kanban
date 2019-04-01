import * as React from 'react';
import IconButton from '../IconButton';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import './SwimmingLane.scss';

interface IProps {
  name: string;
  itemsInLane: number;
  addAction: () => void;
}

const SwimmingLaneHeader: React.FC<IProps> = ({ name, itemsInLane, addAction }) => {
  return (
    <div className="swimminglane-header-container">
        <span className="title">
          {name}
          <span className="items">({itemsInLane})</span>
        </span>
        <IconButton className={"actions"} icon={faEllipsisH} onClick={addAction}/>
    </div>
  );
}

export default SwimmingLaneHeader;
