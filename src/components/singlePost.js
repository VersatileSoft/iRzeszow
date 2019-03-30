import React, { Component } from 'react';
import '../styles/single-post.scss';

export default class SinglePost extends Component {

  state = {}

  constructor(props) {
    super(props);

    if (props.data != null)
      this.state.data = props.data;
  }

  render() {
    console.log("nie")
    console.log(this.props); 
    if (this.state.data == null) {
      return (<div></div>)
    };
    return (
      <div className="SinglePost" style={{backgroundImage: 'url("' + this.state.data.image + '") '}}>

        <div className="title">{this.state.data.title}</div>
        <div className="continue">
          <button>Czytaj dalej</button>
        </div>
        <div className="description">{this.state.data.description}</div>
      </div>
    )
  }
}
