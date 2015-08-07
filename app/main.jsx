import './css/main.css';
import React from 'react';
import App from './component/App';

function main() {
	// get the correct ul
	const middle = document.getElementById('tiles');
	
	React.render(<App />, middle);

}

main();