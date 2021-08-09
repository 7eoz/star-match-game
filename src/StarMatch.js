import React, { useState } from 'react';
import Number from './Number';
import Utils from './Utils';
import Colors from './Colors';

const StarMatch = () => {
  const [stars, setStars] = useState(Utils.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {Utils.range(1, stars).map(starId => (
            <div key={starId} className="star" />
          ))}
        </div>
        <div className="right">
          {Utils.range(1, 9).map(number => (
            <Number key={number} number={number} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
