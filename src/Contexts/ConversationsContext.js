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
    const [conversations, setConversations] = React.useState(potentialMatches.filter(m=>m.thisUserLiked && m.otherUserLiked));
    const socket = useSocket();

    useEffect(() => {
        if(socket) {
        socket.on("receive-message", (data) => {
            console.log(data);

            let tempConversations = [...conversations];
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
           
                  
            // setConversations(prev => {
            //     const newConversations = [...prev];
            //     newConversations.forEach(c => {
            //         if (c.id === data.room) {
            //             console.log(c.messages.length);
            //             c.messages.push({sender:data.sender, message:data.data.message, receiver:data.data.receiver, date:data.data.date});
            //             console.log(c.messages.length);
            //         }
            //     });
            //     return newConversations;
            // });
        });
        return () => {
            socket.off("receive-message");
        }
        }
    }, [socket]);

    useEffect(() => {
        conversations.forEach(conversation => {
            socket.emit('join-room', {room: conversation.id});
        });
        return () => {
            conversations.forEach(conversation => {
                socket.emit('leave-room', {room: conversation.id});
            });
        }
    }, [conversations]);


    useEffect(() => {
        setConversations(potentialMatches.filter(m=>m.thisUserLiked && m.otherUserLiked));
    }, [potentialMatches]);

    return (
        <ConversationsContext.Provider value={{chatWith,setChatWith,conversations, setConversations}}>
        {children}
        </ConversationsContext.Provider>
    )
}
 