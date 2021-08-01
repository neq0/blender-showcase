import React from 'react';
import "./Nav.css";

const Nav = () => {
	return (
		<nav>
			<div className="nav-row flex">
				<div className="center-vertically">
					<a href="#">Index</a>
				</div>
				<div className="center-vertically">
					<a href="#">About</a>
				</div>
			</div>
		</nav>
	)
}

export default Nav;