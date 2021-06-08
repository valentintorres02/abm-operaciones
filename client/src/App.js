import React from 'react';
import { Route } from 'react-router-dom';
import NabvarComponent from './components/Nabvar/NabvarComponent';
import Repository from './components/Repository/Repository';
import routes from './routes/routes';

function App() {
  return (
    <div>
      <Repository />
      <NabvarComponent />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}

    </div>
  );
}

export default App;
