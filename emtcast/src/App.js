import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom_navbar';
import BgLine from './components/bg_line';
import EpisodeCard from './components/episode_card';
function App() {
	const data1 = {
		title: 'What does EMT stand for?',
		time: '45:16',
		description: "Let's find out in this episode."
	};
	const data2 = {
		title: 'How I Became an EMT',
		time: '56:12',
		description: 'Sharing my story.'
	};
	return (
		<div className="App">
			<header className="header">
				<CustomNavbar />
			</header>
			<div className="latestEpisode">
				<EpisodeCard data={data1} />
			</div>
			<div className="randomEpisode">
				<EpisodeCard data={data2} />
			</div>
			<svg className="svgContainer">
				<line className="line1" x1="0" y1="50%" x2="40%" y2="50%" />
				<line className="line2" x1="40%" y1="50%" x2="45%" y2="30%" />
				<line className="line3" x1="45%" y1="30%" x2="55%" y2="70%" />
				<line className="line4" x1="55%" y1="70%" x2="60%" y2="50%" />
				<line className="line5" x1="60%" y1="50%" x2="100%" y2="50%" />
				{/* <BgLine /> */}
			</svg>
		</div>
	);
}

export default App;
