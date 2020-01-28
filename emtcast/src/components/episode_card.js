import React, { Component } from "react";
import "./styling/episode_card.css";

export default class episode_card extends Component {
  render() {
    return (
      <div className="container">
        <div className="triangle">
          <i class="fa fa-play fa-2x"></i>
        </div>
        <div className="grid-item">
          <h4>Latest Episode</h4>
          <p>45:16</p>
          <p>Short description ...</p>
        </div>
      </div>
    );
  }
}
