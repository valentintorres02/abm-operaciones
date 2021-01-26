import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HomeList from './HomeList';

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

      <hr />
      <p>Balance:</p>
      <h5 style={{
        ...currentBalance >= 0 ? { color: 'green' } : { color: 'red' },
      }}
      >
        {currentBalance}
      </h5>
      <hr />
      <p>Últimas 10 operaciones:</p>
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
            {operationsList.slice(Math.max(operationsList.length - 10, 0)).reverse()
              .map((val) => (
                <HomeList
                  id={val.id}
                  concept={val.concept}
                  amount={val.amount}
                  date={val.date}
                  type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
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
