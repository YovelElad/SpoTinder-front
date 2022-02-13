import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


export default function EmptyPage(props) {
  return (
    <>
        <Box sx={{height:"60vh", background:"url('"+props.image+"')", backgroundPosition:"center", backgroundSize:"contain", backgroundRepeat:"no-repeat"}}>
        </Box>
        <Typography variant="h6" align="center">
            {props.title}
        </Typography>
        <Typography variant="subtitle2" align="center" sx={{color:"#b0b0b0"}}>
            {props.subtitle}
        </Typography>
    </>
  )
}
