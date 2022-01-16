import React , { useEffect } from 'react'
import List from '@mui/material/List';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import ChatListItem from '../ChatListItem/ChatListItem';
import { useSocket } from '../../Contexts/SocketProvider';
import { ConversationsContext, useConversations } from '../../Contexts/ConversationsContext';

 
export default function ChatList() {
    const {user} = React.useContext(UserContext)
    const {setPage} = React.useContext(PageContext)
    const {chatWith, setChatWith} = useConversations();


    const handleClick = (id) => {
        setChatWith(id);
        setPage("chat");
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ChatListItem onClick={()=>handleClick("61c5aa37ab0230614f09a5ac")} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing consectetur adipiscing consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick("61c5aa37ab0230614f09a5af")} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick("61c5aa37ab0230614f09a5b2")} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
            <ChatListItem onClick={()=>handleClick(user._id.$oid)} image={user.image} name={user.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
        </List>
    )
}
