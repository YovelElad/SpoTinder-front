import React from 'react'
import List from '@mui/material/List';
import { PageContext } from '../../Contexts/PageContext';
import ChatListItem from '../ChatListItem/ChatListItem';
import { useConversations } from '../../Contexts/ConversationsContext';
import { usePotentialMatches } from '../../Contexts/PotentialMatchesProvider'
import { Skeleton, ListItem, ListItemText } from '@mui/material';
import EmptyPage from '../EmptyPage/EmptyPage';

 
export default function ChatList() {
    const {setPage} = React.useContext(PageContext)
    const { setChatWith, conversations} = useConversations();
    const {potentialMatches} = usePotentialMatches();

    const handleClick = (match) => {
        setChatWith(match);
        setPage("chat");
    }

    const renderSkeleton = () => {
        return Array.apply(null, { length: 8 }).map((item, index) => {
            return (<ListItem key={index} alignItems="flex-start" >
                <Skeleton variant="circular" width={61} height={61} />
                <ListItemText
                primary={<Skeleton
                            animation="wave"
                            height={12}
                            width="80%"
                            style={{ marginBottom: 6, marginTop: 8, marginLeft: 12 }}
                            />  }
                secondary={
                    <React.Fragment >
                    <Skeleton
                        animation="wave"
                        height={12}
                        width="60%"
                        style={{ marginBottom: 6,marginLeft: 12 }}
                        />
                    </React.Fragment>}
                />
            </ListItem>)
            })
        }
    
    const renderList = () => {
        const filteredMatches = potentialMatches.filter(m=>m.thisUserLiked && m.otherUserLiked);
        if(filteredMatches.length > 0) {
            return conversations.map((match, index) => {
                return <ChatListItem key={index} onClick={()=>handleClick(index)} image={match.otherUser.image} name={match.otherUser.name} msg={match.messages.length > 0 ? match.messages[match.messages.length-1].message : ""} />;
            }
            );
        } else {
            return <EmptyPage title="You have no matches yet!" subtitle="Try to like someone and they will appear here..." image="./images/empty_list.png" />
        }
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                potentialMatches.length > 0 ? renderList() : renderSkeleton()

            }
        </List>
    )
}
