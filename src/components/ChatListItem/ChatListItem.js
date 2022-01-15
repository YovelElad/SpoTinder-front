import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'

export default function ChatListItem(props) {
    return (
        <ListItem alignItems="flex-start" onClick={props.onClick}>
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.image}  sx={{ width: 61, height: 61 }}/>
            </ListItemAvatar>
            <ListItemText
            primary={props.name}
            secondary={
                <React.Fragment >
                {props.msg}
                </React.Fragment>
            }
            sx={{marginLeft: '20px', maxHeight: '60px', maxWidth:"70%", overflow: 'hidden', textOverflow: 'ellipsis'}}
            />
        </ListItem>
    )
}
