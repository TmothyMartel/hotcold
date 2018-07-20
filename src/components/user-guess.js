import React from 'react';
import './user-guess.css'
//value={this.props.onChange(e=> (e.target.userGuess))}
export default function UserGuess(props) {
	

	return (
		<form onSubmit={e => e.preventDefault()}>
			<input 
				type="text"
				name="userGuess"
				id="userGuess"
				className="text"
				maxLength="3"
				autoComplete="off"
				placeholder="Enter your Guess"
				required
				onChange={e => props.onChange(e.target.value)}
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

