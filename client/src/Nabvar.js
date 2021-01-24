import React from 'react';
import { Link } from 'react-router-dom';

function Nabvar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/abm">ABM</Link></li>
    </ul>
  );
}

export default Nabvar;
