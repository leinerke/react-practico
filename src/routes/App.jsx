import React from 'react';
import { Routes, Route } from 'react-router-dom'; //V6
import '../styles/global.scss';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="recovery-password" element={<RecoveryPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export { App };
