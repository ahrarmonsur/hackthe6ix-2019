import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from 'components/Header';
import Nav from 'components/Nav';
import AutoInsuranceInfo from 'components/AutoInsurance';
import Profile from 'components/Profile';
import * as ROUTES from '../../constants/routes';

import './index.sass';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header/>
				<Container id='mainContainer'>
					<Route path={ROUTES.CIRCLES} component={AutoInsuranceInfo} />
					<Route path={ROUTES.PROFILE_EDIT} component={Profile} />
				</Container>
				<Nav/>
			</div>
		);
	}
}

export default App;
