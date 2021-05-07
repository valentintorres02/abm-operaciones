import React, { useEffect, useState } from 'react';
import { httpGetAll } from '../../services/httpServices';

function BalanceComponent() {
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    httpGetAll('balance').then(res => setCurrentBalance(res.data.balance));
  }, []);

  return (
    <div>
      <h5>Balance:</h5>
      <h2 style={{
        ...currentBalance >= 0 ? { color: 'green' } : { color: 'red' },
      }}
      >
        {currentBalance}
      </h2>
    </div>
  );
}

export default BalanceComponent;
