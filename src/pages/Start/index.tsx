import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import './index.scss';

interface StartPageProps extends RouteComponentProps {}

const Start = (props: StartPageProps): JSX.Element => {
  return (
    <div className="bg-blue-orange">
      <img className="logo-text" src="/assets/img/logo_text.png" alt="地图猜猜猜" />
      <div className="content-card">
        <img className="logo-house" src="/assets/img/logo.png" alt="House" />
        <p className="brief">
          你是第<span className="rank">100</span>号玩家
        </p>
        <p className="brief subtitle">
          快开始游戏吧～
        </p>
        <Button className="start-game-button" largeFont>进入游戏</Button>
      </div>
    </div>
  );
};

export default Start;
