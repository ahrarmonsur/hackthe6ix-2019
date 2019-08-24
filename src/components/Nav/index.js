import React, {Component} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';


class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'Home'
		};
	}

	render() {
		return (
			<BottomNavigation
				value={this.state.value}
				onChange={(event, newValue) => {
					this.setState({ value: newValue });
				}}
				showLabels
			>
				<BottomNavigationAction label='Home' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='My Circles' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='Claims' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='Account' icon={<FavoriteIcon />} />
			</BottomNavigation>
		);
	}
}

export default Nav;
