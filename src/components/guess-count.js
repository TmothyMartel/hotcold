import React from 'react';

export default function GuessCount(props) {
	const style = {
		marginTop: '0.5em',
		marginBottom: '0',
    	fontSize: '1.8em',
    	paddingBottom: '0.5em'
	}

	const spanStyle = {
		    color: '#f39c12',
            fontWeight: '700',
   			fontSize: '1.5em'
	}

	return (
		<p style={style}>
			Guess # 
			<span style={spanStyle}>
				{props.count}
			</span>
		</p>
	)
}