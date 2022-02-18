import React from 'react'
import "./Login.css"
import Input from "./Input";
import { Button, FormGroup } from '@mui/material';
import Select from './Select';
import { PageContext } from '../../Contexts/PageContext';
import { UserContext } from '../../Contexts/UserContext';
import TopBackground from '../TopBackground/TopBackground';
import { ThemeContext } from '../../Contexts/ThemeContext';
import Logo from '../Logo/Logo';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import authService from '../../services/auth.service';
import { FormControlLabel } from '@material-ui/core';

export default function SignUp() {

    const { setPage } = React.useContext(PageContext);
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [premium, setPremium] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [acceptTerms, setAcceptTerms] = React.useState(false);
    const theme = React.useContext(ThemeContext);
    const [preferences, setPreferences] = React.useState([]);
    const { updateUser } = React.useContext(UserContext);

    function handleSubmit() {
        const userData = {
            name: userName,
            email: email,
            password: password,
            gender: gender,
            interestedIn: preferences
        }

        authService.register(userData, premium).then((res) => {
            if (res.status) {
                updateUser(res.user);
                setPage("spotify-login");
            } else {
                console.log(res);
            }
        })
    }

    const handlePreferancesChange = (e) => {
        if (e.target.checked) {
            setPreferences([...preferences, e.target.name]);
        } else {
            setPreferences(preferences.filter((item) => (item != e.target.name)))
        }
    }

    function cancelPremium() {
        setPremium(false);
        setOpenDialog(false);
        setAcceptTerms(false);
    }
    
    return (
        <div className='signUp' id='signup'>
            <TopBackground color={theme.purple} />

            <div className='wrapper' id="wrapper">
                <h1>
                    Sign Up
                </h1>
                <Logo className="loginLogo" />

                <form action="#">
                    <Input whenChange={(userName) => setUserName(userName)} type="text">User Name</Input>
                    <br /><br />
                    <Input whenChange={(email) => setEmail(email)} type="email">Email Address</Input>
                    <br /><br />
                    <Input whenChange={(password) => setPassword(password)} type="password">Password</Input>
                    <br /><br />
                    <Select whenChange={(gender) => setGender(gender)}>Gender</Select>

                    <br />
                    <label class="mt-3" style={{color:"gray"}}>Interested in</label><br />
                    <FormControlLabel control={<Checkbox onChange={handlePreferancesChange} name='male' />} label="Male" />
                    <FormControlLabel control={<Checkbox onChange={handlePreferancesChange} name='female' />} label="Female" />
                    <br /><br />
                    <FormGroup row>
                        <FormControlLabel checked={premium} onChange={(event) => setPremium(event.target.checked) } control={<Switch />} label="Premium" />
                        <Button  sx={{ml:"45px"}} onClick={() => setOpenDialog(true)} disabled={!premium}>Accept Terms</Button>
                    </FormGroup>
                    <br />
                    <br />
                    <Button onClick={handleSubmit} id='sginUpButton' variant="contained" disabled={premium && !acceptTerms}>SIGN UP</Button>
                </form>
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Premium Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <FormControlLabel control={<Checkbox onChange={acceptTerms ? () => setAcceptTerms(false) : () => setAcceptTerms(true)} />} label="Accept terms and conditions." />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)} disabled={!acceptTerms} >Accept</Button>
                        <Button onClick={cancelPremium} color='error'>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
