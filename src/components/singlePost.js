import React, { Component } from 'react';
import '../styles/single-post.scss';

export default class SinglePost extends Component {
  render() {
    return (
      <div className="SinglePost">
        <div className="title">Tytuł spotkania</div>
        <div className="continue">
          <button>Czytaj dalej</button>
        </div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    )
  }
}
