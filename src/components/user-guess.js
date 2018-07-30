import React from "react";
import "./user-guess.css";
//value={this.props.onChange(e=> (e.target.userGuess))}
export default function UserGuess(props) {
	function onSubmit(e) {
		e.preventDefault();
	}

	return (
		<form id="myForm" onSubmit={e => onSubmit(e)}>
			<input
				type="number"
				name="userGuess"
				id="userGuess"
				className="text"
				maxLength="3"
				autoComplete="off"
				placeholder="Enter your Guess"
				value={props.userInput}
				required
				onChange={e => {
					props.onChange(e.target.value);
				}}
			/>

			<input
				type="submit"
				id="quessButton"
				className="button"
				name="submit"
				value="submit"
			/>
		</form>
	);
}
