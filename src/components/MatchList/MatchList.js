import React from 'react'
import { Grid, Item, Button } from '@mui/material'
import MatchListItem from '../MatchListItem/MatchListItem'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import MatchModal from '../MatchModal/MatchModal'
import { PotentialMatchesContext } from '../../Contexts/PotentialMatchesContext'

export default function MatchList() {
    const {user} = useContext(UserContext);
    const {potentialMatches} = useContext(PotentialMatchesContext)
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState({});

    const handleOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    console.log(potentialMatches);
    return (
    
        <Grid container spacing={2}>
            {potentialMatches.map(item => {
               return <MatchListItem profile={item.otherUser} onClick={handleOpen}/>
            })}
            {open && <MatchModal isOpen={open} handleClose={handleClose} profile={selectedUser}/>}
        </Grid>
    )
}
