import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import './index.scss';

interface RankPageProps extends RouteComponentProps {}

const Rank = (props: RankPageProps): JSX.Element => {
  return (
    <div className="bg-blue-orange">
      <img className="logo-text" src="/assets/img/logo_text.png" alt="地图猜猜猜" />
      <div className="content-card">
        <img className="logo-house" src="/assets/img/logo_rank.png" alt="House" />
        <div className="brief-container grade">
          <p className="brief-title">你的得分是：</p>
          <p className="brief-content">
            <span className="brief-grade-number">100</span>分
          </p>
        </div>
        <div className="brief-container rank">
          <p className="brief-title">超过全校</p>
          <p className="brief-content">
            <span className="brief-grade-number">78%</span>的人
          </p>
        </div>
        <Button className="start-game-button" largeFont>再玩一次</Button>
      </div>
    </div>
  );
};

export default Rank;
