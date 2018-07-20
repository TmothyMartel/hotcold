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
			guesses: [23],
			feedback: 'Make A Guess'
		}
	}

	restart() {
		this.setState({
			winningNum: Math.floor((Math.random()* 100) + 1),
			userNum: '',
			guesses: [],
			feedback: 'Make A Guess'
		});
	}

	userInput(guess) {
		this.setState({
			userNum:guess
		})
	}

	submitNumbers() {
		this.setState({
			guesses: [...this.state.guesses, parseInt(this.state.userNum)]
		})
	}

// submitNumbers() {
// 		const newGuesses = this.state.guesses.slice()
// 		newGuesses.push(this.state.userNum);
// 		this.setState({
// 			guesses: newGuesses
// 		})
// 	}


	render() {
			
		return (
			<div> 
				<Header onRestart={() => this.restart()}/>
			<section className="game-board">
				<Feedback feedback={this.state.feedback} />
				<UserGuess submitNumbers={() => this.submitNumbers()} userInput={this.state.userNum} onChange={guess => this.userInput(guess)}/>
				<GuessCount count={this.state.guesses.length} />
				<GuessList  guesses={this.state.guesses}/>
			</section>
			</div>
		);
	}
	
}
//onChange={num => this.setGuess(num)}