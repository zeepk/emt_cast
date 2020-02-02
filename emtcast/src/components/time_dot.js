import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export default class time_dot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dotLeft: 0,
			dotTop: 44,
			speed: 0.01
		};
		this.startTimer = this.startTimer.bind(this);
		this.myStopFunction = this.myStopFunction.bind(this);
		this.reset = this.reset.bind(this);
	}

	reset = () => {
		this.setState({
			dotLeft: 0,
			dotTop: 44
		});
	};

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
				(this.state.dotLeft >= 39.5 && this.state.dotLeft <= 44.2) ||
				(this.state.dotLeft >= 54.7 && this.state.dotLeft <= 59.2)
			) {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed,
					dotTop: this.state.dotTop - this.state.speed * 4
				});
			} else if (this.state.dotLeft > 44.2 && this.state.dotLeft < 54.7) {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed,
					dotTop: this.state.dotTop + this.state.speed * 3.5
				});
			} else {
				this.setState({
					dotLeft: this.state.dotLeft + this.state.speed * 10
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
		let bgStyle = {
			backgroundColor: '#282c34'
		};
		// console.log(this.state.dotLeft + ', ' + this.state.dotTop);

		return (
			<div className="bgContainer" style={bgStyle}>
				<div style={dotStyle}></div>
				<svg className="svgContainer">
					<line className="line1" x1="0" y1="50%" x2="40%" y2="50%" />
					<line className="line2" x1="40%" y1="50%" x2="45%" y2="30%" />
					<line className="line3" x1="45%" y1="30%" x2="55%" y2="70%" />
					<line className="line4" x1="55%" y1="70%" x2="60%" y2="50%" />
					<line className="line5" x1="60%" y1="50%" x2="100%" y2="50%" />
					{/* <BgLine /> */}
				</svg>
				<Button variant="info" onClick={this.startTimer}>
					Test Start
				</Button>
				<Button variant="dark" onClick={this.myStopFunction}>
					Test Pause
				</Button>
				<Button variant="light" onClick={this.reset}>
					Test Reset
				</Button>
			</div>
		);
	}
}
