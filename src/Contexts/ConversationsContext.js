import React, { useContext, useEffect, useState } from 'react'
import { useSocket } from './SocketProvider'

const ConversationsContext = React.createContext(null);

export function useConversations() {
  return useContext(ConversationsContext)
}

export function  ConversationsProvider({ children }) {
    const [chatWith, setChatWith] = React.useState(null);
    const socket = useSocket();
    useEffect(() => {
        if(chatWith) {
            socket.emit('join-room', {room: chatWith.id});
        }
        return () => {
            if(chatWith) {
                socket.emit('leave-room', {room: chatWith.id});
            }
        }
    }, [chatWith]);

    return (
        <ConversationsContext.Provider value={{chatWith,setChatWith}}>
        {children}
        </ConversationsContext.Provider>
    )
}
 