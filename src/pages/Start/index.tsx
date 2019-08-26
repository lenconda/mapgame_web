import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import './index.scss';
import http from '../../utils/http';

interface StartPageProps extends RouteComponentProps {}

const Start = (props: StartPageProps): JSX.Element => {

  useEffect(() => {
    http
      .get('/api/start');
  }, []);

  return (
    <div className="bg blue-orange">
      <img className="logo-text" src="/assets/img/logo_text.png" alt="地图猜猜猜" />
      <div className="content-card">
        <img className="logo-house" src="/assets/img/logo.png" alt="House" />
        <p className="brief">
          你是第<span className="rank">{localStorage.getItem('user_id')}</span>号玩家
        </p>
        <p className="brief subtitle">
          快开始游戏吧～
        </p>
        <Button
          className="start-game-button"
          largeFont
          onClick={() => props.history.push('/gaming')}
        >
          进入游戏
        </Button>
      </div>
    </div>
  );
};

export default Start;
