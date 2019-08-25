import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import * as ROUTES from 'constants/routes';

import './index.sass';

class AutoInsuranceInfo extends Component {
	render() {
		return (
			<div className='autoInsuranceInfo'>
				<div className='carVector'></div>
				<h1>Auto Insurance</h1>
				<p className='details'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt facilisis sodales mauris imperdiet mattis leo etiam.
				</p>

				<div className='cta'>
					<p className='cta-info'>
						Join an insurance circle that fits your profile and needs.
					</p>

					<Fab
						variant="extended"
						size="medium"
						color="primary"
						aria-label="add"
						component={Link}
						to={ROUTES.PROFILE_EDIT}
					>
						Find your circle
					</Fab>
				</div>
			</div>
		);
	}
}

export default AutoInsuranceInfo;
