import React from 'react';

import NavBar from './nav-bar';
import Feedback from './feedback';
import GuessList from './guess-list';
import UserGuess from './user-guess'
import GuessCount from './guess-count'


export default function GameBoard(props) { 
		return (
			<section>
				<NavBar />
				<Feedback temp={'hot'} />
				<UserGuess />
				<GuessCount count={4} />
				<GuessList listItem={23} />
			</section>
		);
	
}