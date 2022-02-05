import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import '../styles/global.scss';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Router exact path="/home" component={Home} />
          <Router exact path="/login" component={Login} />
          <Router exact path="/recovery-password" component={RecoveryPassword} />
          <Router component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export { App };
