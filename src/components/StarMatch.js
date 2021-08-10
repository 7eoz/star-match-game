import React, { useState } from 'react';
import NumberButton from './NumberButton';
import StarsDisplay from './StarsDisplay';
import Utils from '../Utils';
import Colors from '../Colors';

const StarMatch = () => {
  const [stars, setStars] = useState(Utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);

  const candidatesAreWrong = Utils.sum(candidateNums) > stars;

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {Utils.range(1, 9).map(number => (
            <NumberButton
              key={number}
              status={numberStatus(number)}
              number={number}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
