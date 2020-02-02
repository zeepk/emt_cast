import React, { Component } from 'react';
import './styling/about.css';

class about extends Component {
	render() {
		return (
			<div className="aboutContainer">
				<br />
				<br />
				<br />
				<div className="aboutTextContainer">
					<div className="aboutText">
						<h1 className="aboutTitle">Sup</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
							hendrerit enim. Duis elementum consectetur augue id pharetra.
							Vivamus vel tristique mauris, non finibus ipsum. Donec at maximus
							felis. Nam ultricies enim lorem, et dictum urna posuere sit amet.
							Sed in ante id urna sollicitudin consectetur in a massa. Vivamus
							tempor feugiat turpis facilisis varius. In blandit tellus id
							gravida dignissim. Fusce ut vehicula ex, a varius metus. Integer
							orci lacus, accumsan vel posuere sed, pharetra at nunc.
						</p>
					</div>
					<div className="aboutPics">
						<img
							className="aboutPic1"
							src={require('./../images/profile1.jpg')}
							alt="Profile"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default about;
