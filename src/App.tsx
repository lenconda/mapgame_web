import React, { Suspense, useEffect } from 'react';
import './App.scss';
import http from './utils/http';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './effects/Loading';

const Start = React.lazy(() => import('./pages/Start'));
const Rank = React.lazy(() => import('./pages/Rank'));
const Gaming = React.lazy(() => import('./pages/Gaming'));

const App = (): JSX.Element => {
  useEffect(() => {
    http
      .get('/api/auth')
      .then(res => {
        if (res) {
          localStorage.setItem('token', res.data.data.token);
        }
      });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/start" component={Start} />
          <Route path="/rank" component={Rank} />
          <Route path="/gaming" component={Gaming} />
          <Redirect from="/" to="/start" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
