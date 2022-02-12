import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import MatchListItem from '../MatchListItem/MatchListItem'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import MatchModal from '../MatchModal/MatchModal'
import { PotentialMatchesContext } from '../../Contexts/PotentialMatchesProvider'

export default function MatchList() {
    const {user} = useContext(UserContext);
    const {potentialMatches} = useContext(PotentialMatchesContext);
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState({});
    const {selectedMatch, setSelectedMatch} = useContext(PotentialMatchesContext);

    const handleOpen = (user, match) => {
        // console.log(match);
        setSelectedUser(user);
        setSelectedMatch(match);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    React.useEffect(() => {
        if(selectedMatch) {
            const newSelectedMatch = potentialMatches.find(match => match.id == selectedMatch.id);
            setSelectedMatch(newSelectedMatch);
        }
    }, [potentialMatches])
        

//   console.log(selectedMatch.thisUserLiked);
    return (
    
        <Grid container spacing={2}>
            {potentialMatches.length > 0 ? 
            potentialMatches.map((item,index) => {
                if(user.interestedIn.indexOf(item.otherUser.gender) > -1)
               return <MatchListItem key={index} match={item} thisUser={user} profile={item.otherUser} onClick={handleOpen}/>
            })
            :
            <>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Skeleton sx={{ height: "180px", width: "160px", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            </Grid>
            </>
            }
            {open && <MatchModal isOpen={open} handleClose={handleClose} thisUser={user} profile={selectedUser} match={selectedMatch}/>}
        </Grid>
    )
}
