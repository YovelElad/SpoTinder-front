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
        console.log("now" + chatWith);
        if(chatWith) {
            socket.emit('join-room', {room: chatWith});
        }
        return () => {
            if(chatWith) {
                socket.emit('leave-room', {room: chatWith});
            }
        }
    }, [chatWith]);

    return (
        <ConversationsContext.Provider value={{chatWith,setChatWith}}>
        {children}
        </ConversationsContext.Provider>
    )
}
 