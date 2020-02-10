import React, { Component } from 'react';
import './styling/now_playing.css';

class now_playing extends Component {
	render() {
		return (
			<div>
				<div className="nowPlayingContainer">
					<div>
						<i className="fa fa-play fa-2x"></i>
					</div>
					<div>
						<p className="nowPlayingInfo">Now playing:</p>
					</div>
					<div>
						<p className="nowPlayingTitle">{this.props.npEpisode.title}</p>
					</div>
					<div></div>
					<div>
						<p className="nowPlayingInfo">Time:</p>
					</div>
					<div>
						<p className="nowPlayingTime">{this.props.npEpisode.time}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default now_playing;
