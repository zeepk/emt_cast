import React, { Component } from "react";
import "./styling/episode_card.css";

export default class episode_card extends Component {
  render() {
    return (
      <div className="container">
        <div className="triangle">
          <i className="fa fa-play fa-2x"></i>
        </div>
        <div className="grid-item">
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.time}</p>
          <p>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}
