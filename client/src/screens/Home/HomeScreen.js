import React from 'react';
import BalanceComponent from '../../components/Balance/BalanceComponent';
import LastTenOperations from '../../components/Operations/LastTenOperations/LastTenOperations';

function HomeScreen() {
  return (
    <div className="App">
      <BalanceComponent />
      <hr />
      <LastTenOperations />
    </div>
  );
}

export default HomeScreen
