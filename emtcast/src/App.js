import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom_navbar';
import BgLine from './components/bg_line';
function App() {
	return (
		//     <link
		//   rel="stylesheet"
		//   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		//   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		//   crossorigin="anonymous"
		// />
		<div className="App">
			<header className="header">
				<CustomNavbar />
			</header>
			<BgLine />
		</div>
	);
}

export default App;
