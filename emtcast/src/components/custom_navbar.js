import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NowPlaying from './now_playing';
export default class custom_navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { episode: this.props.episode };
	}
	componentDidUpdate(prevProps) {
		if (!(this.props.episode === prevProps.episode)) {
			this.setState({
				episode: this.props.episode
			});
		}
	}
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">EMTcast</Navbar.Brand>
				<Nav className=" ml-auto">
					<NowPlaying npEpisode={this.state.episode} />
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#episodeList">Episodes</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}
