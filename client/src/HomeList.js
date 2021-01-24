import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function HomeList({
  id, concept, amount, date, type,
}) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>
          {concept}
        </td>
        <td>
          $
          {amount}
        </td>
        <td>{date}</td>
        <td>{type}</td>
      </tr>
    </>
  );
}

HomeList.defaultProps = {
  id: 0,
  concept: '',
  amount: 0,
  date: '',
  type: '',
};

HomeList.propTypes = {
  id: PropTypes.number,
  concept: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
};

export default HomeList;
