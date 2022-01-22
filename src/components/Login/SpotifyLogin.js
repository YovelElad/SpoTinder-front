import React from 'react'
import Logo from '../Logo/Logo';
import { Typography, Avatar, Box, Stack, Button, Container } from '@mui/material';
// import { Button } from '@mui/material';
import { ThemeContext } from '../../Contexts/ThemeContext';
import SpotifyIcon from './SpotifyIcon';
import { UserContext } from '../../Contexts/UserContext';
import authService from '../../services/auth.service';
import { PageContext } from '../../Contexts/PageContext';





export default function LoginSpotofy() {
    const theme = React.useContext(ThemeContext);
    const { user, updateUser } = React.useContext(UserContext);
    const { setPage } = React.useContext(PageContext);


    const submit = (e) => {
        e.preventDefault();
        console.log(user);
        authService.spotifyRegister(user).then(res => {
            if (res.status) {
                console.log(res);
                // setPage("home");
                
                window.location.replace(res.data.data);
            } else {
                console.log(res);
            }
        }).catch(err => {
            console.log("ERROR: ", err);
        })
    }

    return (
        <div className='spotifyLogin'
            style={{ background: `linear-gradient(${theme.purple} 21.12%, ${theme.darkPurple} 100% )` }}>
            <div id='wrapper'>

                <div className='logoFrame'>
                    <Logo />
                    <h3>Login</h3>
                </div>
                <form>
                    <Button id='SpotifyButton' variant="contained" onClick={submit}>
                        <SpotifyIcon></SpotifyIcon>

                        Login With Spotify
                    </Button>
                </form>
            </div>

        </div>
    )
}
