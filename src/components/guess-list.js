import React from 'react';
import './guess-list.css'

function ListItem(props) {
	return <li>{props.value} </li>;
}

export default function GuessList(props) {
	const guesses = props.guesses;
	const listItems = guesses.map( (guess) => 
			<ListItem key={guess.toString()} value={guess} />
		);
	

	return (
		<ul id="GuessList" className="guessBox">
		{listItems}
		</ul>
		)
	} 