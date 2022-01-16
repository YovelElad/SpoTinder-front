import React from 'react'
import Logo from '../Logo/Logo';
import { Typography, Avatar, Box,Stack, Button, Container } from '@mui/material';
// import { Button } from '@mui/material';
import { ThemeContext } from '../../Contexts/ThemeContext';
import SpotifyIcon from './SpotifyIcon';



export default function LoginSpotofy() {
    const theme = React.useContext(ThemeContext);

    return (
        <div className='spotifyLogin' 
        style={{background:  `linear-gradient(${theme.purple} 21.12%, ${theme.darkPurple} 100% )`}}>
            <div id='wrapper'>

            <div className='logoFrame'>
                <Logo />
                <h3>Login</h3>
            </div>
                <form>
                <Button id='SpotifyButton' variant="contained">
                <SpotifyIcon></SpotifyIcon>
                    
                    Login With Spotify
                    </Button>
                </form>
            </div>

        </div>
    )
}
