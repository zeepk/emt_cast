import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom_navbar';
import BgLine from './components/bg_line';
function App() {
	return (
		<div className="App">
			<header className="header">
				<CustomNavbar />
			</header>
			<BgLine />
		</div>
	);
}

export default App;
