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
                console.log(conversationRef);
                handleRecieveMessage(data);
            });
            return () => {
                socket.off("receive-message");
            }
        }
    }, [socket]);

    const handleRecieveMessage = (data) => {
        let tempConversations = [...conversationRef.current];
        console.log(tempConversations);
        tempConversations = tempConversations.map(c => {
            if(c.id == data.room) {
                console.log("found room");
                c.messages.push({sender:data.sender, message:data.data.message, receiver:data.data.receiver, date:data.data.date});
            }
            return c;
        });
        console.log(tempConversations);
        if(tempConversations.length > 0) {
            setConversations(tempConversations);
        }
    }

    useEffect(() => {
        console.log(conversations);
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
        console.log("here");
        console.log(potentialMatches);
        const newConversations = potentialMatches.filter(m=>m.thisUserLiked && m.otherUserLiked);
        console.log(newConversations);
        setConversations(newConversations);
    }, [potentialMatches]);

    return (
        <ConversationsContext.Provider value={{chatWith,setChatWith,conversations, setConversations}}>
        {children}
        </ConversationsContext.Provider>
    )
}
 