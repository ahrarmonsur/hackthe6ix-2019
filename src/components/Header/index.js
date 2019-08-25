import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.sass';

class Header extends Component {

	render() {
		return (
			<div className='header'>
				<Link to={'/'}>
					Donut
				</Link>
			</div>
		);
	}
}

export default Header;
