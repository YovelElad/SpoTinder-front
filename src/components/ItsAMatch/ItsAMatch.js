import { Typography } from '@mui/material';
import React from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext';

export default function ItsAMatch() {
    const theme = React.useContext(ThemeContext);

    return (
        <div style={{
            background:  `linear-gradient(${theme.purple} 21.12%, ${theme.darkPurple} 100% )`,
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: "100",
        }}>
            <Typography variant="h4" gutterBottom component="div" style={{
                color: "white",
                textAlign: "center",
                marginTop: "50px",
            }}>
                It's a match!
            </Typography>
        </div>
    )
}