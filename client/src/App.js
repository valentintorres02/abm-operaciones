import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Abm from './components/Abm';
import Nabvar from './components/Nabvar';

function App() {
  const [operationsList, setOperationsList] = useState([]);

  const fetchData = () => {
    Axios.get('http://localhost:3001/api/get')
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
      <Nabvar />
      <Route
        exact
        path="/"
        render={() => (
          <Home operationsList={operationsList} />
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
    </div>
  );
}

export default App;
