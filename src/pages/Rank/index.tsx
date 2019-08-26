import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import './index.scss';
import http from '../../utils/http';

interface RankPageProps extends RouteComponentProps {}

const Rank = (props: RankPageProps): JSX.Element => {
  const [currentGradeScore, setCurrentGradeScore] = useState<number>(0);

  useEffect(() => {
    http
      .get('/api/result')
      .then(res => {
        if (res) {
          setCurrentGradeScore(res.data.data[res.data.data.length - 1].score);
        }
      });
  }, []);

  return (
    <div className="bg blue-orange">
      <img className="logo-text" src="/assets/img/logo_text.png" alt="地图猜猜猜" />
      <div className="content-card rank">
        <img className="logo-house" src="/assets/img/logo_rank.png" alt="House" />

        <section className="rank-result">
          <div className="brief-container player">
            No.<span className="brief-player-number">{localStorage.getItem('user_id')}</span> 玩家
          </div>

          <div className="brief-container grade">
            <p className="brief-title">您的得分是：</p>
            <p className="brief-content">
              <span className="brief-grade-number">{currentGradeScore}</span>分
            </p>
          </div>

          <div className="brief-container rank">
            <p className="brief-title">超过全校</p>
            <p className="brief-content">
              <span className="brief-grade-number">{localStorage.getItem('percent')}%</span>的人
            </p>
          </div>
        </section>

        <Button
          className="again-game-button"
          largeFont
          onClick={() => props.history.push('/')}
        >
          再玩一次
        </Button>
      </div>
    </div>
  );
};

export default Rank;
