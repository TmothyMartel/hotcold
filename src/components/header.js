import React from 'react';
import NavBar from './nav-bar';
import Modal from './modal';

const style = {
	fontWeight: '900',
    fontSize:'3em',
    padding: '0.8em',
    margin: '0',
    color: '#fff'
}

export default function Header(props) {
	 const showHide = {
        	'display': props.modal ? 'block' : 'none' 
    	};
	return (
		<header>
			<NavBar toggleModal={setting => props.toggleModal(setting)} onRestart={() => props.onRestart()} />
			<Modal toggle={showHide} toggleModal={setting => props.toggleModal(setting)} />
			<h1 style={style}>Hot or Cold</h1>
		</header>
		)
}