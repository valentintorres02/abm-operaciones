import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import HomeScreen from './screens/Home/HomeScreen';
import NabvarComponent from './components/Nabvar/NabvarComponent';
import CreateOperationScreen from './screens/CreateOperation/CreateOperationScreen';

function App() {
  return (
    <div>
      <NabvarComponent />
      <Route
        exact
        path="/"
        render={() => (
          <HomeScreen />
        )}
      />
      <Route
        exact
        path="/create-operation"
        render={() => (
          <CreateOperationScreen />
        )}
      />
    </div>
  );
}

export default App;
