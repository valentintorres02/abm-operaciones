import React from 'react';

function SubmitButton({ textToDisplay }) {
  return (
    <button type="submit" className="btn btn-primary btn-block">{textToDisplay}</button>
  );
};

export default SubmitButton;
