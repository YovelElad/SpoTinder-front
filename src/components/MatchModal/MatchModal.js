import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../../Contexts/ThemeContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function MatchModal(props) {
    const theme = useContext(ThemeContext);
    // console.log(props.profile._id);

    const handleLike = async (e) => {
        e.preventDefault();
        console.log("thisUser id -> ", props.thisUser._id);
        console.log("match id -> ", props.match.id);
        let matchData;
        let matchResponse;
        const fetchCall = "https://spotinder-shenkar.herokuapp.com/users/" + props.thisUser._id + "/matches/" + props.match.id;
        try {
            matchResponse = await fetch(fetchCall);
            if (matchResponse.ok) {
                matchData = await matchResponse.json();
                matchData = matchData.data;
                if (props.match.thisUserIs == "first") {
                    matchData.firstUserLiked = true
                } else {
                    matchData.secondUserLiked = true
                }
                // console.log(matchData);
                let updateMatchResponse;
                let updateMatchData;
                const option = {
                    method: 'PUT',
                    body: JSON.stringify(matchData)

                }
                try {
                    updateMatchResponse = await fetch(fetchCall, option);
                    if (updateMatchResponse.ok) {
                        updateMatchData = await updateMatchResponse.json();
                        updateMatchData = updateMatchData;
                        console.log(matchData);
                        console.log(updateMatchData);
                    }
                } catch (err) {
                    console.log("catch:", err);
                }

            } else {
                console.log("else");
            }
        } catch (err) {
            console.log("catch:", err);
        }







        //"https://spotinder-shenkar.herokuapp.com/users/61c251968f8363939c98f480/matches/61e4164fe66be9fb78ea3441"
        //`https://spotindshenkar.herokuapp.com/users/${props.thisUser._id}/matches/${props.match.id}`
        // const fetchCall = "https://spotinder-shenkar.herokuapp.com/users/" + props.thisUser._id + "/matches/" + props.match.id;
        // try {
        //     // matchResponse = await fetch(`https://spotindshenkar.herokuapp.com/users/${props.thisUser._id}/matches/${props.match.id}`, {
        //     matchResponse = await fetch(fetchCall, {
        //         method: 'PUT',
        //         body: dataToUpdate
        //     })
        //     if (matchResponse.ok) {
        //         alert("You liked " + props.profile.name + ":)");
        //         matchData = await matchResponse.json();
        //         matchData = matchData.data;
        //         console.log(matchData);
        //     }
        //     else {
        //         alert("Error");
        //     }
        // } catch (err) {
        //     console.log("ERROR:", err);
        // }

    }


    return (
        <Modal
            open={props.isOpen}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {props.isOpen && (
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 1 }}>
                        {props.profile.name}
                    </Typography>
                    <img src={props.profile.image} alt="profile" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
                    <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Match Score: {props.profile.matchScore}%
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                        Top 5 Mutal Artists
                    </Typography>
                    <Box style={{ maxHeight: 200, overflow: 'auto', paddingBottom: "15px" }}>
                        <Stack direction="row" spacing={1} >
                            {props.profile.topArtists.slice(0, 5).map((artist, index) => {
                                return <Chip key={`a${index}`} label={artist} variant="outlined" />
                            })}
                        </Stack>
                    </Box>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                        Top 5 Mutal Traks
                    </Typography>
                    {props.profile.topTracks.slice(0, 5).map((track, index) => {
                        return <Chip key={`t${index}`} label={track} variant="outlined" sx={{ marginLeft: "5px" }} />
                    })}
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }} >
                        <Stack direction="row" spacing={5} >
                            <IconButton aria-label="delete" sx={{ background: theme.red }}>
                                <CloseIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton aria-label="delete" sx={{ background: theme.purple }} onClick={handleLike}>
                                {props.profile.isFavorite ? <FavoriteIcon sx={{ color: "white" }} /> : <FavoriteBorderIcon sx={{ color: "white" }} />}
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>
            )}
        </Modal>
    )
}
