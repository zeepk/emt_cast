import React, { Component } from 'react';

export default class time_dot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dotLeft: 0,
			dotTop: 49,
			speed: 0.1
		};
		this.startTimer = this.startTimer.bind(this);
		this.myStopFunction = this.myStopFunction.bind(this);
	}

	startTimer() {
		this.setState({
			dotLeft: this.state.dotLeft,
			dotTop: this.state.dotTop
		});
		this.timer = setInterval(() => {
			if (this.state.dotLeft >= 98) {
				clearInterval(this.timer);
				this.setState({
					dotLeft: 98
				});
			} else if (
				(this.state.dotLeft >= 39.5 && this.state.dotLeft <= 44.5) ||
				(this.state.dotLeft >= 54.5 && this.state.dotLeft <= 59.5)
			) {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed,
					dotTop: this.state.dotTop - this.state.speed * 4
				});
			} else if (this.state.dotLeft > 44.5 && this.state.dotLeft < 54.5) {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed,
					dotTop: this.state.dotTop + this.state.speed * 4
				});
			} else {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed * 3
				});
			}
		}, 1);
	}

	myStopFunction() {
		clearInterval(this.timer);
	}

	render() {
		let dotStyle = {
			border: '10px solid red',
			borderRadius: '100%',
			position: 'absolute',
			filter: 'drop-shadow(0 0 0.75rem crimson)',
			left: `${this.state.dotLeft}%`,
			top: `${this.state.dotTop}%`
			// zIndex: 2
		};
		// console.log(this.state.dotLeft + ', ' + this.state.dotTop);

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
				<button onClick={this.myStopFunction}>stop</button>
			</div>
		);
	}
}
