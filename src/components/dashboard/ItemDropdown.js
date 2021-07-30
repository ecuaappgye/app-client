import React from "react";
import { Link } from "react-router-dom";

const ItemDropdown = ({Item}) => {
  return (
    <li>
      <Link className="dropdown-item" to="#">
          {Item}
      </Link>
    </li>
  );
};

export default ItemDropdown;
