import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import HomeScreen from './screens/Home/HomeScreen';
import Abm from './components/Abm';
import NabvarComponent from './components/Nabvar/NabvarComponent';
import CreateOperationScreen from './screens/CreateOperation/CreateOperationScreen';

function App() {
  const [operationsList, setOperationsList] = useState([]);

  const fetchData = () => {
    Axios.get('http://localhost:3000/operation')
      .then((response) => {
        setOperationsList(response.data);
        return response.data;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        path="/abm"
        render={() => (
          <Abm
            operationsList={operationsList}
            setOperationsList={setOperationsList}
          />
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
