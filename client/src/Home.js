import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';

function Home({ operationsList }) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);

  useEffect(() => {
    (operationsList.filter((activity) => (activity.type === 'in'))).forEach((incomeOperation) => {
      setTotalIncome((prevIncome) => prevIncome + Number(incomeOperation.amount));
    });
  }, [operationsList]);

  useEffect(() => {
    (operationsList.filter((activity) => (activity.type === 'out'))).forEach((outcomeOperation) => {
      setTotalOutcome((prevOutcome) => prevOutcome + Number(outcomeOperation.amount));
    });
  }, [operationsList]);

  const currentBalance = totalIncome - totalOutcome;

  return (
    <div className="App">
      <h3>Balance:</h3>
      <p style={{
        ...currentBalance > 0 ? { color: 'green' } : { color: 'red' },
      }}
      >
        {currentBalance}
      </p>
      <h3>Últimas 10 operaciones:</h3>
      <div>
        <table className="table table-bordered mb-5">
          <thead>
            <tr className="table-success">
              <th scope="col">#</th>
              <th scope="col">Concepto</th>
              <th scope="col">Monto</th>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {operationsList.slice(operationsList.length - 10,
              operationsList.length).reverse()
              .map((val) => (
                <List
                  id={val.id}
                  concept={val.concept}
                  amount={val.amount}
                  date={val.date}
                  type={val.type}
                />
              ))}
          </tbody>
        </table>
      </div>

    </div>

  );
}

Home.defaultProps = {
  operationsList: [],
};

Home.propTypes = {
  operationsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    concept: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default Home;
