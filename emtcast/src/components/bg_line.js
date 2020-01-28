import React, { Component } from 'react';
import './styling/bg_line.css';
export default class bg_line extends Component {
	render() {
		return (
			<div>
				<svg className="svgContainer">
					<line className="line1" x1="0" y1="0" x2="200" y2="200" />
					<line className="line2" x1="0" y1="0" x2="200" y2="200" />
					<line className="line3" x1="0" y1="0" x2="200" y2="200" />
					<line className="line4" x1="0" y1="0" x2="200" y2="200" />
					<line className="line5" x1="0" y1="0" x2="200" y2="200" />
				</svg>
			</div>
		);
	}
}
