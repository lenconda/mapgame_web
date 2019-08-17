import React from 'react';
import Button from '../../components/Button';

const TwoChooseOne = (): JSX.Element => {
  return (
    <div>
      <div className="image-box">
        <img src="" alt="pic1" width="100%" height="100%" />
      </div>
      <div className="image-box">
        <img src="" alt="pic1" width="100%" height="100%" />
      </div>
      <div className="buttons-container">
        <Button width="auto">是</Button>
        <Button width="auto">否</Button>
      </div>
    </div>
  );
};

export default TwoChooseOne;
