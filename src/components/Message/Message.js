import { Box, Typography } from '@mui/material'
import React from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext';

export default function Message(props) {
    const theme = React.useContext(ThemeContext)
    
    const Style = {
        borderRadius: '30px',
        padding: '15px',
        marginTop: '10px',
        maxWidth: '70%',
    }
    const Left = {
        background: '#F1F1F1',
        alignSelf: 'start',
    }
    const Right = {
        background: theme.purple,
        alignSelf: 'end',
    }
    const LeftText = {
        fontFamily: 'Roboto', color: 'black' 
    }
    const RightText = {
        fontFamily: 'Roboto',
        color: 'white',
    }
    return (
        <Box sx={props.right? {...Style,...Right} : {...Style,...Left}}>
            <Typography variant='body1' sx={props.right? RightText : LeftText}>
                {props.message}
            </Typography>
        </Box>
    )
}
