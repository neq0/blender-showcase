import React from 'react';
import "./Header.css";

const Header = () => {
	return (
		<header>
			<div className="header-row flex">
				<div className="title center-vertically">
					<h1>birdue's Blender Showcase Site!</h1>
				</div>
				<div className="flex">
					<div className="center-vertically">
						<p className="disclaimer">(<em>Not</em> endorsed by</p>
					</div>
					<div className="retain-height center-vertically">
						<a href="https://www.blender.org/" target="_blank" rel="noreferrer">
							<img className="header-logo" src="./img/blender icon.svg" alt="Blender logo" />  
						</a>
					</div>
					<div className="center-vertically">
						<p className="disclaimer">!)</p>
					</div>
				</div>  
			</div>
		</header>
	)
}

export default Header;