import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import axios from 'axios';
import RegisterCompanyComponent from './components/registerCompanyComponent';
import RegisterUserComponent from './components/registerUserComponent';
import RegisterMainComponent from './components/registerMainComponent';
import RegisterPreferencesComponent from './components/registerPreferencesComponent';
import SignInComponent from './components/signInComponent';

class App extends Component {

  componentDidMount(){
    const { cookies } = this.props
    if(cookies.get('token') !== undefined){
      axios.interceptors.request.use(function(config) {
        const token = cookies.get('token');
        if( token != null ){
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },function(err){
          return Promise.reject(err);
        });
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Main />}></Route>
        <Route path="/register" render={() => <RegisterMainComponent />}></Route>
<<<<<<< HEAD
        <Route path="/sign" render={() => <SignInComponent cookies={this.props.cookies} />}></Route>
=======
        <Route path="/sign" render={() => <SignInComponent />}></Route>
        <Route path="/preferences" render={() => <RegisterPreferencesComponent />}></Route>
>>>>>>> 8fd7ddfa2be6215bf4e98a67e1f8c5e74111aebc
      </Switch>
    );
  }
}


export default withCookies(App);
