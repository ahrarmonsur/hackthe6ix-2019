import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import AutoInsuranceInfo from 'components/AutoInsurance';
import Container from '@material-ui/core/Container';
import Header from 'components/Header';
import Home from 'components/Home';
import Nav from 'components/Nav';

import './index.sass';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header/>
                <Home/>
				<Nav/>
			</div>
		);
	}
}

export default App;
