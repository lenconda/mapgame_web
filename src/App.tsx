import React, { Suspense } from 'react';
import './App.scss';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './effects/Loading';

const Start = React.lazy(() => import('./pages/Start'));
const Rank = React.lazy(() => import('./pages/Rank'));
const Gaming = React.lazy(() => import('./pages/Gaming'));

const App = (): JSX.Element => {
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
