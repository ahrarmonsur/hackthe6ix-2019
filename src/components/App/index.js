import React from 'react';
import logo from '../../logo.svg';
import Header from 'components/Header';
import Nav from 'components/Nav';

import './index.sass';

function App() {
	return (
		<div className="app">
			<Header/>
			<div className='mainContainer'>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Nav/>
		</div>
	);
}

export default App;
