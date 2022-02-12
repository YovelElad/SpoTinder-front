import React, {useContext} from 'react'
import { Box, Grid, Typography } from '@mui/material';
import {Skeleton} from '@mui/material';



export default function MatchListItem(props) {

    const onClick = () => {
        props.onClick(props.profile, props.match);
    }

    return (
        <Grid item xs={6} sm={4} sx={{position: "relative"}}>
            {!props.blur ?
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
                            Score: {Math.round(props.match.score*100)}%
                        </Typography>
                    </Box>
                </Box>
            </Box>
            :
            <>
            <Box sx={{
                backgroundImage: `url(${props.profile.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                height: "180px",
                width: "160px",
                filter: "blur(5px)",
            }}>
            </Box>
            <div style={{
                position: "absolute",
                top: "120px",
                left: "30px",
                width: "100%",

            }}>
                <div style={{
                    width: "40%",
                    backgroundColor: "#ffffff",
                    height: "12px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                }}></div>
                <div style={{
                    width: "20%",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    height: "12px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                }}></div>
                <div style={{
                    width: "30%",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    height: "12px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                }}></div>
            </div>
            </>
            }
        </Grid>
    )
}
