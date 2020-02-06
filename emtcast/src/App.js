import React from 'react';
import './App.css';
import './components/styling/bg_line.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom_navbar';
import Dot from './components/time_dot';
import EpisodeCard from './components/episode_card';
import EpisodeList from './components/episode_list';
import About from './components/about';

function App() {
	const data = [
		{
			title: 'What does EMT stand for?',
			time: '45:16',
			description:
				'Doing me a frighten very hand that feed shibe long doggo much ruin diet, wow very biscit. He made many woofs very good spot ur givin me a spook bork, wrinkler blep. Such treat wrinkler woofer clouds pats, shibe most angery pupper I have ever seen aqua doggo, pupper corgo adorable doggo. Very hand that feed shibe borking doggo clouds h*ck very taste wow long bois, smol stop it fren heck the neighborhood pupper boofers, smol most angery pupper I have ever seen I am bekom fat heckin angery woofer.'
		},
		{
			title: 'How I Became an EMT',
			time: '56:12',
			description: 'Sharing my story.'
		}
	];

	return (
		<div id="home" className="App">
			<header className="header">
				<CustomNavbar title={'nice'} />
			</header>
			<div className="latestEpisode">
				<EpisodeCard data={data[0]} />
			</div>
			<div className="randomEpisode">
				<EpisodeCard data={data[1]} />
			</div>
			<Dot />
			<div id="about" className="about">
				<About />
			</div>
			<div id="episodeList" className="episodeList">
				<EpisodeList data={data} />
			</div>
		</div>
	);
}

export default App;
