import React from 'react';

export default function UserGuess(props) {
	return (
		<form>
			<input 
				type="text"
				name="userGuess"
				id="userGuess"
				class="text"
				maxlength="3"
				autocomplete="off"
				placeholder="Enter your Guess"
				required
			/>
			
			<input 
				type="submit" 
				id="quessButton" 
				class="button" 
				name="submit" 
				value="guess" 
			/>
		</form>
	);
}