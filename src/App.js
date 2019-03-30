import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import axios from 'axios';
import RegisterMainComponent from './components/registerMainComponent';
import SignInComponent from './components/signInComponent';
import CreatePostComponent from './components/createPostComponent';

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
        <Route exact path="/" render={() => <SignInComponent cookies={this.props.cookies} />}></Route>
        <Route path="/register" render={() => <RegisterMainComponent />}></Route>
        <Route path="/home" render={() => <Main />}></Route>
        <Route path="/post" render={() => <CreatePostComponent cookies={this.props.cookies} />}></Route>
      </Switch>
    );
  }
}


export default withCookies(App);
