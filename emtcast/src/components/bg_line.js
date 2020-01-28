import React, { Component } from 'react';
import './styling/bg_line.css';
export default class bg_line extends Component {
	render() {
		return (
			<svg className="svgContainer">
				<line className="line1" x1="0" y1="50%" x2="45%" y2="50%" />
				<line className="line2" x1="45%" y1="50%" x2="50%" y2="30%" />
				<line className="line3" x1="50%" y1="30%" x2="60%" y2="70%" />
				<line className="line4" x1="60%" y1="70%" x2="65%" y2="50%" />
				<line className="line5" x1="65%" y1="50%" x2="100%" y2="50%" />
			</svg>
		);
	}
}
