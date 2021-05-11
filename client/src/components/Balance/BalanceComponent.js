import React, { useEffect, useState } from 'react';
import { httpGetAll } from '../../services/httpServices';
import BalanceContent from './BalanceContent';

function BalanceComponent() {
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    httpGetAll('balance').then(res => setCurrentBalance(res.data.balance));
  }, []);

  return (
    <BalanceContent currentBalance={currentBalance} />
  );
}

export default BalanceComponent;
