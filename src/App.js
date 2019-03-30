import React, { Component } from 'react';
import 'reset-css';
import { Switch, Route } from 'react-router';
import { withCookies } from 'react-cookie';
import Main from './components/mainComponent';
import RegisterMainComponent from './components/registerMainComponent';
import SignInComponent from './components/signInComponent';
import CreatePostComponent from './components/createPostComponent';
import SinglePost from './components/singlePost';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <SignInComponent cookies={this.props.cookies} />}></Route>
        <Route path="/register" render={() => <RegisterMainComponent cookies={this.props.cookies} />}></Route>
        <Route path="/home" render={() => <Main />}></Route>
        <Route path="/post" render={() => <CreatePostComponent cookies={this.props.cookies} />}></Route>
        <Route path="/singlePost" render={() => <SinglePost />}></Route>
      </Switch>
    );
  }
}


export default withCookies(App);
