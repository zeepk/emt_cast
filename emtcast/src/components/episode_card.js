import React, { Component } from 'react';
import './styling/episode_card.css';

export default class episode_card extends Component {
	text_truncate = (str, length, ending) => {
		if (length == null) {
			length = 100;
		}
		if (ending == null) {
			ending = '...';
		}
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;
		}
	};
	render() {
		const description = this.text_truncate(
			this.props.data.description,
			60,
			'...'
		);
		return (
			<div className="episodeCardContainer">
				<div className="triangle">
					<i className="fa fa-play fa-2x"></i>
				</div>
				<div className="episodeCardGridItem">
					<h4>{this.props.data.title}</h4>
					<p>{this.props.data.time}</p>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}
