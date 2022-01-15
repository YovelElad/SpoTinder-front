import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import { UserContext } from '../../Contexts/UserContext';
import Chat from '../Matches/Matches';
import ChatListItem from '../ChatListItem/ChatListItem';
 
export default function ChatList() {
    const {user} = React.useContext(UserContext)
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing consectetur adipiscing consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
        </List>
    )
}
