import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import loggedin from './components/loggedin';
import SignupPage from './components/signup/SignupPage';
import LoginForm from './components/login/LoginForm';
import LoginPage from './components/login/LoginForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginForm} />
	<Route path="loggedin" component={loggedin} />
  </Route>
)
