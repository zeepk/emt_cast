import React, { Component } from 'react';

class now_playing extends Component {
	render() {
		return (
			<div>
				<h4 className="nowPlayingTitle">{this.props.title}</h4>
			</div>
		);
	}
}

export default now_playing;
