import React from 'react'
import { Grid, Item, Button } from '@mui/material'
import MatchListItem from '../MatchListItem/MatchListItem'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import MatchModal from '../MatchModal/MatchModal'
import { PotentialMatchesContext } from '../../Contexts/PotentialMatchesProvider'

export default function MatchList() {
    const {user} = useContext(UserContext);
    const {potentialMatches} = useContext(PotentialMatchesContext)
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState({});
    const [selectedMatch, setSelectedMatch] = React.useState({});

    const handleOpen = (user, match) => {
        // console.log(match);
        setSelectedUser(user);
        setSelectedMatch(match);
        console.log(user);
        console.log(match);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // console.log(potentialMatches);

  
    return (
    
        <Grid container spacing={2}>
            {potentialMatches.map(item => {
               return <MatchListItem match={item} thisUser={user} profile={item.otherUser} onClick={handleOpen}/>
            })}
            {open && <MatchModal isOpen={open} handleClose={handleClose} thisUser={user} profile={selectedUser} match={selectedMatch}/>}
        </Grid>
    )
}
