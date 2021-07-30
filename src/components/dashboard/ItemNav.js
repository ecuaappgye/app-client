import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ItemNav = ({ClassItem, LinkN, IconImg, Item }) => {
  return (
    <Link to={LinkN} className={`nav_link ${ClassItem}`}>
      <FontAwesomeIcon icon={IconImg} size="lg" />
      <span>{Item}</span>
    </Link>
  );
};

export default ItemNav;
