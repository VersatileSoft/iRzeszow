import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import RegisterCompanyComponent from './components/registerCompanyComponent';
import RegisterUserComponent from './components/registerUserComponent';
import RegisterMainComponent from './components/registerUserComponent';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Main />}></Route>
        <Route exact path="/register" render={() => <RegisterMainComponent />}></Route>
      </Switch>
    );
  }
}


export default withCookies(App);
