import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import RegisterCompanyComponent from './components/registerCompanyComponent';
import RegisterUserComponent from './components/registerUserComponent';
import RegisterMainComponent from './components/registerMainComponent';
import RegisterPreferencesComponent from './components/registerPreferencesComponent';
import SignIn from './components/signInComponent';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Main />}></Route>
        <Route path="/register" render={() => <RegisterUserComponent />}></Route>
      </Switch>
    );
  }
}


export default withCookies(App);
