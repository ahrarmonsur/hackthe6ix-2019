import React, {Component} from 'react';
import {
	Link,
	withRouter
} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';

import * as ROUTES from '../../constants/routes';


class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: -1,
			paths: [
				ROUTES.HOME,
				ROUTES.CIRCLES,
				ROUTES.CLAIMS,
				ROUTES.ACCOUNT
			]
		};

	}

	componentWillMount() {
		const { pathname } = this.props.location;
		this.setActiveButton(pathname);
	}

	componentWillReceiveProps(newProps) {
		const { pathname } = newProps.location;
		this.setActiveButton(pathname);
	}

	setActiveButton(path) {
		const { paths } = this.state;

		const value = paths.indexOf(path);

		if (value > -1) {
			this.setState({
				value
			});
		}
	}

	handleChange = (event, value) => {
		this.setState({ value });
	}

	render() {
		const {value, paths} = this.state;
		return (
			<BottomNavigation
				value={value}
				onChange={this.handleChange}
				showLabels
			>
				<BottomNavigationAction label='Home' icon={<FavoriteIcon />} component={Link} to={paths[0]} />
				<BottomNavigationAction label='My Circles' icon={<FavoriteIcon />} component={Link} to={paths[1]} />
				<BottomNavigationAction label='Claims' icon={<FavoriteIcon />} component={Link} to={paths[2]} />
				<BottomNavigationAction label='Account' icon={<FavoriteIcon />} component={Link} to={paths[3]} />
			</BottomNavigation>
		);
	}
}

export default withRouter(Nav);
