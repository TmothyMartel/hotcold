import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameBoard from './components/game-board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameBoard />, document.getElementById('root'));
registerServiceWorker();
