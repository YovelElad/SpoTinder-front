import React, {useContext} from 'react'
import { Box, Grid, Typography } from '@mui/material';



export default function MatchListItem(props) {

    const onClick = () => {
        props.onClick(props.profile);
    }
    return (
        <Grid item xs={6} sm={4}>
            <Box onClick={onClick} sx={{
                backgroundImage: `url(${props.profile.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                height: "180px",
                width: "160px",
            }}>
                <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.45)",
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    color: "white",
                    alignItems: "end",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    <Box sx={{
                        marginLeft: "10px",
                        marginBottom: "10px",
                    }}>
                        <Typography variant="subtitle1" gutterBottom component="div" sx={{ textOverflow: "ellipsis", overflowX: "hidden", width: "93%"}}>
                            {props.profile.name}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Score: 10%
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
