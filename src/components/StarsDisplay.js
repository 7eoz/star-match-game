import React from 'react';
import Utils from '../Utils';

const StarsDisplay = props => (
  <>
    {Utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
