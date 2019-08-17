import React from 'react';
import Button from '../../components/Button';

const FourChooseOne = (): JSX.Element => {
  return (
    <div>
      <div className="image-box">
        <img src="" alt="pic1" width="100%" height="100%" />
      </div>
      <div className="options-container">
        <Button>A.润溪湖</Button>
        <Button>B.图书馆</Button>
        <Button>C.综合实验大楼</Button>
        <Button>D.建工楼</Button>
      </div>
    </div>
  );
};

export default FourChooseOne;
