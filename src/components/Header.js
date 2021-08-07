import React from 'react';
import blenderIcon from "../img/icon-blender.png";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<div className="header-row">
				<h1>birdue's Blender Showcase!</h1>
				<div className="disclaimer">
					<p>
						(<em>Not</em> endorsed by
					</p>
					<a className="header-logo" href="https://www.blender.org/"
						target="_blank" rel="noreferrer">
						<img src={blenderIcon} alt="Blender" />
					</a>
					<p>
						!)
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;