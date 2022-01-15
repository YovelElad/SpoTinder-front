import React from 'react'
import { Box } from '@mui/material';

export default function TopBackground(props) {
    return (
        <Box style={{
            position: "absolute",
            zIndex: "-1",
            height: "311px",
            width: "100%",
            }}>
            <svg width="100%" height="311" viewBox="0 0 500 80" preserveAspectRatio="none">
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%"  stopColor={props.color+'f2'} /> 
                <stop offset="54%" stopColor={props.color+'bf'} />
                <stop offset="100%" stopColor={props.color+'99'} />
                </linearGradient>
            </defs>
            <path d="M0,0 L0,70 Q250,80 500,70 L500,0 Z" fill="url('#myGradient')" />
            </svg>
        </Box>
    )
}
