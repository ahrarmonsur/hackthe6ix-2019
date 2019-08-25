import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CameraAlt from '@material-ui/icons/CameraAlt';

import { makeStyles } from '@material-ui/core/styles';

import './index.sass';


class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Auto Insurance',
			activeStep: 0,
			sections: [
				{ title: 'Driver\'s license' },
				{ title: 'Add your vehicle details' },
				{ title: 'How do you use your vehicle?' },
				{ title: 'Home address' },
			],
			form: {
			}
		};

		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	handleNext() {
		this.setState({
			activeStep: this.state.activeStep + 1
		});
	}

	handleBack() {
		this.setState({
			activeStep: this.state.activeStep - 1
		});
	}

	render() {
		const { title, activeStep, sections } = this.state

		const handleChange = name => event => {
			this.setState({
				form: {
					...this.state.form,
					[name]: event.target.value
				}
			});
		};

		return (
			<div className='profileEditor'>
				<div className='titleSection'>
					<Typography variant='h4' component='h1'>
						{ title }
					</Typography>
					<Typography variant='h1' component='h2'>
						{ sections[activeStep].title }
					</Typography>
				</div>

				{
					this.state.activeStep == 0 &&
					<div className='formContainer'>
						<form noValidate autoComplete='off'>
							<TextField
								id='license'
								label='License Number'
								fullWidth={true}
								value={this.state.form.license}
								placeholder='i.e. M00000-00000-00000'
								onChange={handleChange('license')}
								margin='normal'
							/>
							<TextField
								id='expiry'
								label='Expiry Date'
								fullWidth={true}
								value={this.state.form.expiry}
								placeholder='YYYY/MM/DD'
								onChange={handleChange('expiry')}
								margin='normal'
							/>
							<Button color="primary" className='scanButton'>
								<CameraAlt />
								Scan my license instead
							</Button>
						</form>
					</div>



				}
				<MobileStepper
					className='progressControls'
					variant="dots"
					steps={sections.length}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button size="small" onClick={this.handleNext} disabled={activeStep === 5}>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
							<KeyboardArrowLeft />
							Back
						</Button>
					}
				/>


			</div>
		);
	}
}

export default Profile;
