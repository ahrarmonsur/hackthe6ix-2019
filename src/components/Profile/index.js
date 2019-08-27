import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
				ownership: 'lease',
				isForRideshare: false,
				milesPerYear: '<10k'
			}
		};
	}


	render() {
		const { title, activeStep, sections } = this.state

		const handleNext = () => {
			this.setState({
				activeStep: this.state.activeStep + 1
			});
		}

		const handleBack = () => {
			this.setState({
				activeStep: this.state.activeStep - 1
			});
		}

		const handleChange = name => event => {
			this.setState({
				form: {
					...this.state.form,
					[name]: event.target.value
				}
			});
		};

		const handleToggleChange = name => (event, value) => {
			console.log({name, event, value})
			this.setState({
				form: {
					...this.state.form,
					[name]: value
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
					/* STEP 1 */
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

				{
					/* STEP 2 */
					this.state.activeStep == 1 &&
					<div className='formContainer'>
						<form noValidate autoComplete='off'>
							<div className='row'>
								<TextField
									id='year'
									label='Year'
									value={this.state.form.year}
									placeholder='2015'
									onChange={handleChange('year')}
									margin='normal'
								/>
								<TextField
									id='make'
									label='Make'
									value={this.state.form.make}
									placeholder='Toyota'
									onChange={handleChange('make')}
									margin='normal'
								/>
							</div>

							<TextField
								id='model'
								label='Model'
								fullWidth={true}
								value={this.state.form.model}
								placeholder='Matrix'
								onChange={handleChange('model')}
								margin='normal'
							/>
							<TextField
								id='vin'
								label='Vehicle Identification Number'
								fullWidth={true}
								value={this.state.form.vin}
								placeholder='XXXXXXXXXXXXXXXXX'
								onChange={handleChange('vin')}
								margin='normal'
							/>
							<TextField
								id='plate'
								label='License Plate Number'
								fullWidth={true}
								value={this.state.form.plate}
								placeholder='XXXXXXXXXX'
								onChange={handleChange('plate')}
								margin='normal'
							/>
						</form>
					</div>
				}

				{
					/* STEP 3 */
					this.state.activeStep == 3 &&
					<div className='formContainer'>
						<form noValidate autoComplete='off'>
							<FormControl>
								<FormLabel htmlFor='ownership'>Do you own this vehicle?</FormLabel>
								<ToggleButtonGroup id='ownership' size="large" value={this.state.form.ownership} exclusive onChange={handleToggleChange('ownership')}>
									<ToggleButton key={1} value="own">
										Own it
									</ToggleButton>
									<ToggleButton key={2} value="finance">
										Finance it
									</ToggleButton>
									<ToggleButton key={3} value="lease">
										Lease it
									</ToggleButton>
								</ToggleButtonGroup>
								<FormHelperText></FormHelperText>
							</FormControl>

							<FormControl>
								<FormLabel htmlFor='isForRideshare'>Do you use this vehicle for ridesharing?</FormLabel>
								<ToggleButtonGroup id='isForRideshare' size="large" value={this.state.form.isForRideshare} exclusive onChange={handleToggleChange('isForRideShare')}>
									<ToggleButton key={1} value={true}>
										Yes
									</ToggleButton>
									<ToggleButton key={2} value={false}>
										No
									</ToggleButton>
								</ToggleButtonGroup>
								<FormHelperText></FormHelperText>
							</FormControl>

							<FormControl>
								<FormLabel htmlFor='milesPerYear'>How many miles do you drive per year?</FormLabel>
								<ToggleButtonGroup id='milesPerYear' size="large" value={this.state.form.milesPerYear} exclusive onChange={handleToggleChange('milesPerYear')}>
									<ToggleButton key={1} value='<10k'>
										{ '< 10,000 km' }
									</ToggleButton>
									<ToggleButton key={2} value='10k-20k'>
										{ '10,000 - 20,000 km' }
									</ToggleButton>
									<ToggleButton key={3} value='>20k'>
										{ '> 20,000 km' }
									</ToggleButton>
								</ToggleButtonGroup>
								<FormHelperText></FormHelperText>
							</FormControl>
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
						<Button size="small" onClick={handleNext} disabled={activeStep === 5}>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
