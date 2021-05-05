import React from 'react';
import { Link } from 'react-router-dom';


function NabvarItem({ path, nameToDisplay }) {
  return (
    <li className="nav-item">
      <Link className="nav-link active" to={path}>{nameToDisplay}</Link>
    </li>
  );
}

export default NabvarItem;
