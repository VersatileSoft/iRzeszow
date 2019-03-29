import React, { Component } from 'react';
import 'reset-css';
import { Switch } from 'react-router';
import { withCookies } from 'react-cookie';

class App extends Component {

  render() {
    return (
      <Switch>
      </Switch>
    );
  }
}


export default withCookies(App);
