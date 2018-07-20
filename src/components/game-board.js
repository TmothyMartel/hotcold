import React from 'react';

import Header from './header';
import Feedback from './feedback';
import GuessList from './guess-list';
import UserGuess from './user-guess';
import GuessCount from './guess-count';
import './game-board.css';



export default class GameBoard extends React.Component { 
	constructor(props) {
		super(props)
		this.state = {
			winningNum: Math.floor((Math.random()* 100) + 1),
			userNum: '',
			count: 0,
			guesses: [],
			feedback: 'Make A Guess'
		}
		this.userInput = this.userInput.bind(this);
	}

	restart() {
		this.setState({
			winningNum: Math.floor((Math.random()* 100) + 1),
			userNum: '',
			count: 0,
			guesses: [],
			feedback: 'Make A Guess'
		});
	}

	userInput(guess) {
		this.setState({
			userNum: guess
		})

	}



	render() {
			console.log(this.state.userNum);
		return (
			<div> 
				<Header onRestart={() => this.restart()}/>
			<section className="game-board">
				<Feedback feedback={this.state.feedback} />
				<UserGuess onChange={guess => this.userInput(guess)}/>
				<GuessCount count={4} />
				<GuessList  guesses={[11,2,3]}/>
			</section>
			</div>
		);
	}
	
}
//onChange={num => this.setGuess(num)}