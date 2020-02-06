import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NowPlaying from './now_playing';
export default class custom_navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { title: this.props.title, time: '' };
	}
	componentDidUpdate(prevProps) {
		if (!(this.props.title === prevProps.title)) {
			this.setState({
				title: this.props.title
				// time: this.props.time
			});
		}
	}
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">EMTcast</Navbar.Brand>
				<Nav className="mr-auto ml-auto">
					<NowPlaying title={this.state.title} />
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
