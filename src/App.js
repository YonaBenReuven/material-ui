import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import makeStyles from '@material-ui/styles/makeStyles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import purple from '@material-ui/core/colors/purple';

const mainTheme = createMuiTheme({
	palette: {
		primary: { main: green[400] },
		secondary: { main: orange[400] }
	}
});

const buttonTheme = createMuiTheme({
	palette: {
		primary: { main: purple[400] }
	}
})

const App = () => {
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	const classes = useStyles();

	const onSend = () => {
		if (phone.length !== 10) return setPhoneError(true);
		setPhoneError(false);
		setDialogOpen(true);
	}

	return (
		<ThemeProvider theme={mainTheme}>
			<div className="App">
				<form className={classes.form}>
					<TextField
						label="name"
						color="primary"
						className={classes.textField}
					/>
					<TextField
						value={phone}
						onChange={event => setPhone(event.target.value)}
						error={phoneError}
						label="phone nubmer"
						className={classes.textField}
						InputProps={{
							startAdornment: <PhoneIcon />,
							classes: { error: classes.phoneError }
						}}
					/>
					<TextField
						label="password"
						variant="outlined"
						color="secondary"
						className={classes.textField}
					/>
					<ThemeProvider theme={buttonTheme}>
						<Button
							color="primary"
							variant="contained"
							startIcon={<SendIcon />}
							onClick={onSend}
						>send</Button>
					</ThemeProvider>
				</form>
				<Dialog open={dialogOpen} onBackdropClick={() => setDialogOpen(false)}>
					yay
				</Dialog>
			</div>
		</ThemeProvider>
	);
}

export default App;

const useStyles = makeStyles({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'baseline',
		width: 300,
		margin: 50
	},

	textField: {
		margin: 20
	},

	phoneError: {
		background: yellow[400]
	}
});