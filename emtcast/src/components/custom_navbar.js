import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class custom_navbar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">EMTcast</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#episodeList">Episodes</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}
