import React from 'react';
import Input from "./Input";
import { Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import AuthService from "../../services/auth.service";
import Logo from '../Logo/Logo';
import TopBackground from '../TopBackground/TopBackground';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { display } from '@mui/system';




export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { updateUser } = React.useContext(UserContext);
    const { setPage } = React.useContext(PageContext);
    const theme = React.useContext(ThemeContext);
    const [userFound, setUserFound] = React.useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        AuthService.login(email, password).then(res => {
            if (res.status) {
                updateUser(res.user);
            } else {
                console.log(res);
            }
        }).catch(err => {
            setUserFound(false);
            console.log(err);
        });
        // .then(res => {
        // }).catch(err => {
        //     console.log("err");
        //     console.log(err);
        // })

        setEmail('');
        setPassword('');
    }

    const goToSignUp = (event) => {
        event.preventDefault();
        setPage("signup");
    }

    return (
        <div className='login'>
            <TopBackground color={theme.purple}/>
            <div className='wrapper'>

                <h1>
                    Login
                </h1>
                <Logo className="loginLogo"/>
                <form action="#">
                    <Input userFound={userFound}  whenChange={(email) => setEmail(email)} name="email" value={email} type="email">Email Address</Input>
                    <br /> <br />
                    <Input userFound={userFound} whenChange={(password) => setPassword(password)} name="password" value={password} type="password">Password</Input>
                    <br />
                    <br />
                    <Button className='loginButton' color="secondary" onClick={handleSubmit} variant="contained">Login</Button>
                </form>
                <p className='errorMessage' style={{display: userFound ? "none" : "block"}}>Incorrect Email or Password</p>
                <button className='signUpButton' onClick={goToSignUp}>Don't have accout? Sign Up!</button>
            </div>
        </div>
    )
}
