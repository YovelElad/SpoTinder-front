import { Container, Typography } from '@mui/material'
import React from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import ChatList from '../ChatList/ChatList'
import Logo from '../Logo/Logo'

export default function Chat() {
    return (
        <>
            <Container sx={{mt:7}}>
                <Typography variant='h4' sx={{fontFamily: 'Roboto'}}>
                    Chats
                </Typography>
                <ChatList/>
            </Container>
        </>
    )
}
