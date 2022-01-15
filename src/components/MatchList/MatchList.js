import React from 'react'
import { Grid, Item, Button } from '@mui/material'
import MatchListItem from '../MatchListItem/MatchListItem'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import MatchModal from '../MatchModal/MatchModal'

export default function MatchList() {
    const {user} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState({});

    const handleOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Grid container spacing={2}>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            <MatchListItem profile={user} onClick={handleOpen}/>
            {open && <MatchModal isOpen={open} handleClose={handleClose} profile={selectedUser}/>}
            
        </Grid>
    )
}
