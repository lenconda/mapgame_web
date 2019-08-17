import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import './index.scss';

interface GamingPageProps extends RouteComponentProps {}

type GameSelectionType = 'twoChooseOne' | 'foruChooseOne';

const Gaming = (props: GamingPageProps): JSX.Element => {
  const [gameSelectionType, setGameSelectionType] = useState<GameSelectionType>('foruChooseOne');

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

  return (
    <div className={gameSelectionType === 'twoChooseOne' ? 'bg-orange-blue' : 'bg-blue-orange'}>
      <div className="grade-container">
        分数：<span className="grade-number">20</span>
      </div>

      <div className="content-card">
        <h1 className="question-title">
          {
            gameSelectionType === 'twoChooseOne' && '请判断以下图片是否指的是同一个地点？'
          }
          {
            gameSelectionType === 'foruChooseOne' && '请判断以下图片对应的是以下哪个地点？'
          }
        </h1>
        <section className={`question-content ${(gameSelectionType === 'twoChooseOne') && 'two-choose-one'}`}>
          {
            (gameSelectionType === 'twoChooseOne') && <TwoChooseOne />
          }
          {
            (gameSelectionType === 'foruChooseOne') && <FourChooseOne />
          }
        </section>
      </div>
    </div>
  );
};

export default Gaming;
