import React from 'react';
import NabvarItem from './NabvarItem';
import { nabvarRoutes } from './nabvarRoutes';

function NabvarComponent() {
  return (
    <ul className="nav">
      {nabvarRoutes.map((route) => (
        <NabvarItem key={route.nameToDisplay} path={route.path} nameToDisplay={route.nameToDisplay} />
      ))}
    </ul>
  );
}

export default NabvarComponent;
