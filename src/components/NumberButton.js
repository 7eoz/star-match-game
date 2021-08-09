import React from 'react';

const NumberButton = props => (
  <button className="number" onClick={() => console.log('Num', props.number)}>
    {props.number}
  </button>
);

export default NumberButton;
