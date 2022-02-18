import React, { useContext, useEffect, useState } from 'react'
import { useSocket } from './SocketProvider'
import { usePotentialMatches } from './PotentialMatchesProvider'

const ConversationsContext = React.createContext(null);

export function useConversations() {
  return useContext(ConversationsContext)
}

export function  ConversationsProvider({ children }) {
    const [chatWith, setChatWith] = React.useState(null);
    const { potentialMatches } = usePotentialMatches();
    const [conversations, _setConversations] = React.useState([]);
    const socket = useSocket();  
    const conversationRef = React.useRef(conversations);      

    const setConversations = (conv) => {
        conversationRef.current = conv;
        _setConversations(conv);
    }

    useEffect(() => {
        if(socket) {
            socket.on("receive-message", (data) => {
                handleRecieveMessage(data);
            });
            return () => {
                socket.off("receive-message");
            }
        }
    }, [socket]);

    const handleRecieveMessage = (data) => {
        let tempConversations = [...conversationRef.current];
        tempConversations = tempConversations.map(c => {
            if(c.id == data.room) {
                c.messages.push({sender:data.sender, message:data.data.message, receiver:data.data.receiver, date:data.data.date});
            }
            return c;
        });
        if(tempConversations.length > 0) {
            setConversations(tempConversations);
        }
    }

    useEffect(() => {
        if(socket) {
            conversations.forEach(conversation => {
                socket.emit('join-room', {room: conversation.id});
            });
        }
        return () => {
            conversations.forEach(conversation => {
                socket.emit('leave-room', {room: conversation.id});
            });
        }
    }, [conversations]);


    useEffect(() => {
        const newConversations = potentialMatches.filter(m=>m.thisUserLiked && m.otherUserLiked);
        setConversations(newConversations);
    }, [potentialMatches]);

    return (
        <ConversationsContext.Provider value={{chatWith,setChatWith,conversations, setConversations}}>
        {children}
        </ConversationsContext.Provider>
    )
}
 