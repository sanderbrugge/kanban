import * as React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './IconButton.scss';

interface IProps {
  title?: string;
  icon: IconDefinition;
  className?: string;
  onClick: () => void;
}

const IconButton: React.FC<IProps> = ({ title, icon, onClick, className }) => {
  return (
    <a
    className={`${className} button`}
    onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      {title && <span>{title}</span>}
    </a>
  );
};

export default IconButton;
