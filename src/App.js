import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import RegisterCompanyComponent from './components/registerCompanyComponent';
import RegisterMainComponent from './components/registerMainComponent';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" render={()=><Main />}></Route>
      </Switch>
    );
  }
}


export default withCookies(App);
