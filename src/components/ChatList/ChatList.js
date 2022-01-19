import React , { useEffect } from 'react'
import List from '@mui/material/List';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import ChatListItem from '../ChatListItem/ChatListItem';
import { useSocket } from '../../Contexts/SocketProvider';
import { ConversationsContext, useConversations } from '../../Contexts/ConversationsContext';
import { usePotentialMatches } from '../../Contexts/PotentialMatchesProvider'


 
export default function ChatList() {
    const {user} = React.useContext(UserContext)
    const {setPage} = React.useContext(PageContext)
    const {chatWith, setChatWith} = useConversations();
    const {potentialMatches} = usePotentialMatches();



    const handleClick = (match) => {
        setChatWith(match);
        setPage("chat");
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {potentialMatches.map((match,index) => {
                {/* if(match.thisUserLiked && match.otherUserLiked) */}
                return <ChatListItem key={index} onClick={()=>handleClick(match)} image={match.otherUser.image} name={match.otherUser.name} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "} />;
            })}
        </List>
    )
}
