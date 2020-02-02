import React, { Component } from 'react';
import './styling/episode.css';

export default class episode extends Component {
	render() {
		return (
			<div className="episodeContainer">
				<div className="playContainer">
					<div className="episodeTriangle">
						<i className="fa fa-play fa-2x"></i>
					</div>
				</div>
				<div className="episodeGridItem">
					<h4>{this.props.data.title}</h4>
					<p>{this.props.data.time}</p>
					<p>{this.props.data.description}</p>
				</div>
			</div>
		);
	}
}
