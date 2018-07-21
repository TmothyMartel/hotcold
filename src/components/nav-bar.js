import React from 'react';
import './nav-bar.css';

export default function NavBar(props) {
	return (
			<nav>
				<ul>
					<li className="what">
						<a  href="#modal" onClick={() => props.toggleModal(true)}>What ?</a>
					</li>
					<li className="new">
						<a href="#restart"
						 onClick={() => props.onRestart()}>
							+ New Game
						</a>
					</li>
				</ul>
			</nav>
		)
}