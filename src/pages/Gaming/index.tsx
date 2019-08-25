import React, { useState, useEffect, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loading from '../../effects/Loading';
import Bookmark from '../../components/Bookmark';
import './index.scss';
import http from '../../utils/http';

interface GamingPageProps extends RouteComponentProps {}

type GameSelectionType = 'twoChooseOne' | 'fourChooseOne' | '';

const FourChooseOne = React.lazy(() => import('./FourChooseOne'));
const TwoChooseOne = React.lazy(() => import('./TwoChooseOne'));

const Gaming = (props: GamingPageProps): JSX.Element => {
  const [gameSelectionType, setGameSelectionType] = useState<GameSelectionType>('');
  const [gameQuestionSelections, setGameQuestionSelections] = useState<string[]>([]);
  const [gameQuestionImages, setGameQuestionImages] = useState<string | string[]>('');
  const [gameCurrentScore, setGameCurrentScore] = useState<number>(0);
  const [gameCurrentLevel, setGameCurrentLevel] = useState<number>(1);
  const [isLastLevelOfGame, setIsLastLevelOfGame] = useState<boolean>(false);
  const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState<string>('');
  const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState<string>('');

  useEffect(() => {
    http
      .get('/api/question')
      .then(res => {
        if (res) {
          setGameQuestionImages(res.data.data.img_url);
          setGameQuestionSelections(res.data.data.selections);
          if (Array.isArray(res.data.data.img_url)) {
            setGameSelectionType('twoChooseOne');
          } else {
            setGameSelectionType('fourChooseOne');
          }
        }
      });
  }, []);

  const handleSubmitQuestionAnswer = (answer: string) => {
    setCurrentSelectedAnswer(answer);

    http
      .post('/api/submit', { answer })
      .then(res => {
        if (res) {
          setIsLastLevelOfGame(res.data.data.is_finish);
          setGameCurrentScore(res.data.data.score);
          setCurrentQuestionAnswer(res.data.data.answer);

          setTimeout(() => {
            if (isLastLevelOfGame) {
              props.history.push('/rank');
            } else {
              setGameQuestionImages(res.data.data.current_question.img_url);
              setGameQuestionSelections(res.data.data.current_question.selections);
              if (Array.isArray(res.data.data.current_question.img_url)) {
                setGameSelectionType('twoChooseOne');
              } else {
                setGameSelectionType('fourChooseOne');
              }
              setGameCurrentLevel(gameCurrentLevel + 1);
              setCurrentQuestionAnswer('');
            }
          }, 1500);
        }
      });
  };

  return (
    <div className={gameSelectionType === 'twoChooseOne' ? 'bg orange-blue' : 'bg blue-orange'}>
      <Bookmark background={gameSelectionType === 'twoChooseOne' ? 'blue' : 'pink'} className="level">
        <span className="name">
          <span className="name-text">关卡</span>{gameCurrentLevel}
        </span>
      </Bookmark>

      <div className="grade-container">
        分数：<span className="grade-number">{gameCurrentScore}</span>
      </div>

      <div className="content-card">
        <h1 className="question-title">
          {
            gameSelectionType === 'twoChooseOne' && '请判断以下图片是否指的是同一个地点？'
          }
          {
            gameSelectionType === 'fourChooseOne' && '请判断以下图片对应的是以下哪个地点？'
          }
        </h1>
        <section className={`question-content ${(gameSelectionType === 'twoChooseOne') && 'two-choose-one'}`}>
          {
            (gameSelectionType === 'twoChooseOne' && Array.isArray(gameQuestionImages)) && (
              <Suspense fallback={<Loading />}>
                <TwoChooseOne
                  imgUrl={gameQuestionImages}
                  onSubmit={answer => handleSubmitQuestionAnswer(answer)}
                  selected={currentSelectedAnswer}
                  answer={currentQuestionAnswer}
                />
              </Suspense>
            )
          }
          {
            (gameSelectionType === 'fourChooseOne' && typeof gameQuestionImages === 'string') && (
              <Suspense fallback={<Loading />}>
                <FourChooseOne
                  imgUrl={gameQuestionImages}
                  selections={gameQuestionSelections}
                  selected={currentSelectedAnswer}
                  answer={currentQuestionAnswer}
                  onSubmit={answer => handleSubmitQuestionAnswer(answer)}
                />
              </Suspense>
            )
          }
        </section>
      </div>
    </div>
  );
};

export default Gaming;
