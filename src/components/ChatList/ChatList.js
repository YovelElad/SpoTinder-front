import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import Chat from '../Matches/Matches';
import ChatListItem from '../ChatListItem/ChatListItem';
 
export default function ChatList() {
    const {user} = React.useContext(UserContext)
    const {setPage} = React.useContext(PageContext)
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing consectetur adipiscing consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>setPage('chat')} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
        </List>
    )
}
