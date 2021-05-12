import React from 'react';

function BalanceContent({ currentBalance }) {
  return (
    <div>
      <h5>Balance:</h5>
      <h2 className={currentBalance >= 0 ? 'positive-balance' : 'negative-balance'}>
        {currentBalance}
      </h2>
    </div>
  );
};

export default BalanceContent;
