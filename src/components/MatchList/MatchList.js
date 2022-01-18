import React from 'react'
import { Grid, Item, Button } from '@mui/material'
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
        

  
    return (
    
        <Grid container spacing={2}>
            {potentialMatches.map((item,index) => {
               return <MatchListItem key={index} match={item} thisUser={user} profile={item.otherUser} onClick={handleOpen}/>
            })}
            {open && <MatchModal isOpen={open} handleClose={handleClose} thisUser={user} profile={selectedUser} match={selectedMatch}/>}
        </Grid>
    )
}
