import React from 'react';
import Colors from '../Colors';

const NumberButton = props => (
  <button
    className="number"
    style={{ backgroundColor: Colors[props.status] }}
    onClick={() => console.log('Num', props.number)}
  >
    {props.number}
  </button>
);

export default NumberButton;
