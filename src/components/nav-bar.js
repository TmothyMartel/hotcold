import React from 'react';
import './nav-bar.css';

export default function NavBar(props) {
	return (
			<nav>
				<ul>
					<li className="what">
						<a  href="#">What ?</a>
					</li>
					<li className="new">
						<a href="#"
						 onClick={() => props.onRestart()}>
							+ New Game
						</a>
					</li>
				</ul>
			</nav>
		)
}