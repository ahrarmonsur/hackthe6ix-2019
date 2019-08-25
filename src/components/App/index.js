import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import logo from '../../logo.svg';
import Header from 'components/Header';
import Nav from 'components/Nav';

import './index.sass';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header/>
				<div className='mainContainer'>
					<img src={logo} className="App-logo" alt="logo" />
					{this.props.children}
				</div>
				<Nav/>
			</div>
		);
	}
}

export default App;
