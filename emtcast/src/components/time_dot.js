import React, { Component } from "react";
import "./styling/time_dot.css";

export default class time_dot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotLeft: 0,
      dotTop: 50
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      dotLeft: this.state.dotLeft
    });
    this.timer = setInterval(
      () =>
        this.setState({
          dotLeft: this.state.dotLeft + 0.05
        }),
      50
    );
  }
  render() {
    // let dotLeft = this.props.dotLeft;
    // let dotTop = this.props.dotTop;
    let dotStyle = {
      border: "10px solid white",
      borderRadius: "100%",
      position: "absolute",
      left: `${this.state.dotLeft}%`,
      top: `${this.state.dotTop}%`
    };
    console.log(this.state.dotLeft + ", " + this.state.dotTop);
    // let myVar = setInterval(this.myTimer, 1000);

    return (
      <div className="bgContainer">
        <div style={dotStyle}></div>
        <svg className="svgContainer">
          <line className="line1" x1="0" y1="50%" x2="40%" y2="50%" />
          <line className="line2" x1="40%" y1="50%" x2="45%" y2="30%" />
          <line className="line3" x1="45%" y1="30%" x2="55%" y2="70%" />
          <line className="line4" x1="55%" y1="70%" x2="60%" y2="50%" />
          <line className="line5" x1="60%" y1="50%" x2="100%" y2="50%" />
          {/* <BgLine /> */}
        </svg>
        <button onClick={this.startTimer}>start</button>
      </div>
    );
  }
}
