import React, { Component } from 'react';
import '../styles/single-post.scss';

export default class SinglePost extends Component {

  constructor(props) {
    super(props);

    this.state.data = props.data;
  }

  render() {
    return (
      <div className="SinglePost" style={"background: url(" + this.state.data.image + ") no-repeat fixed center"}>
        <div className="title">{this.state.data.title}</div>
        <div className="continue">
          <button>Czytaj dalej</button>
        </div>
        <div className="description">{this.state.data.description}</div>
      </div>
    )
  }
}
