import React, { Component } from 'react';
import Episode from './episode';
import './styling/episode_list.css';

export default class episode_list extends Component {
	render() {
		return (
			<div className="episodeListContainer">
				<h1 className="title">Episodes</h1>
				<ul>
					<li>
						<Episode data={this.props.data[0]} />
					</li>
					<li>
						<Episode data={this.props.data[1]} />
					</li>
					<li>
						<Episode data={this.props.data[0]} />
					</li>
					<li>
						<Episode data={this.props.data[1]} />
					</li>
				</ul>
			</div>
		);
	}
}
