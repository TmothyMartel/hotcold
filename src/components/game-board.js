import React from "react";

import Header from "./header";
import Feedback from "./feedback";
import GuessList from "./guess-list";
import UserGuess from "./user-guess";
import GuessCount from "./guess-count";
import "./game-board.css";

export default class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			winningNum: Math.floor(Math.random() * 100 + 1),
			userNum: "",
			guesses: [],
			feedback: "Make A Guess",
			showModal: false
		};
	}

	restart() {
		this.setState({
			winningNum: Math.floor(Math.random() * 100 + 1),
			userNum: "",
			guesses: [],
			feedback: "Make A Guess",
			showModal: false
		});
	}

	userInput(guess) {
		this.setState({
			userNum: guess
		});
	}

	submitNumbers() {
		const difference = Math.abs(this.state.userNum - this.state.winningNum);

		let newFeedback;
		if (difference >= 50) {
			newFeedback = "You are Ice Cold! ";
		} else if (difference >= 30) {
			newFeedback = "Getting colder";
		} else if (difference >= 10) {
			newFeedback = "Getting Warmer";
		} else if (difference >= 1) {
			newFeedback = "You are HOT!";
		} else {
			newFeedback = "You Win!";
		}

		this.setState({
			guesses: [...this.state.guesses, parseInt(this.state.userNum, 10)],
			feedback: newFeedback
		});
	}

	toggleModal(setting) {
		this.setState({
			showModal: setting
		});
	}

	render() {
		return (
			<div>
				<Header
					modal={this.state.showModal}
					toggleModal={setting => this.toggleModal(setting)}
					onRestart={() => this.restart()}
				/>
				<section className="game-board">
					<Feedback feedback={this.state.feedback} />
					<UserGuess
						submitNumbers={() => this.submitNumbers()}
						userInput={this.state.userNum}
						onChange={guess => this.userInput(guess)}
					/>
					<GuessCount count={this.state.guesses.length} />
					<GuessList guesses={this.state.guesses} />
				</section>
			</div>
		);
	}
}
//onChange={num => this.setGuess(num)}

// const showHide = {
//        	'display': this.state.showModal ? 'none' : 'block'
//    	// };
