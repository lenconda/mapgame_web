import React, { useState, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loading from '../../effects/Loading';
import Bookmark from '../../components/Bookmark';
import './index.scss';

interface GamingPageProps extends RouteComponentProps {}

type GameSelectionType = 'twoChooseOne' | 'foruChooseOne' | '';

const FourChooseOne = React.lazy(() => import('./FourChooseOne'));
const TwoChooseOne = React.lazy(() => import('./TwoChooseOne'));

const Gaming = (props: GamingPageProps): JSX.Element => {
  const [gameSelectionType, setGameSelectionType] = useState<GameSelectionType>('twoChooseOne');

  return (
    <div className={gameSelectionType === 'twoChooseOne' ? 'bg orange-blue' : 'bg blue-orange'}>
      <Bookmark background={gameSelectionType === 'twoChooseOne' ? 'blue' : 'pink'} className="level">
        <span className="name">
          <span className="name-text">关卡</span>1
        </span>
      </Bookmark>

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
            (gameSelectionType === 'twoChooseOne') && (
              <Suspense fallback={<Loading />}>
                <TwoChooseOne />
              </Suspense>
            )
          }
          {
            (gameSelectionType === 'foruChooseOne') && (
              <Suspense fallback={<Loading />}>
                <FourChooseOne />
              </Suspense>
            )
          }
        </section>
      </div>
    </div>
  );
};

export default Gaming;
