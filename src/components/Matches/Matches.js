import { Container, Typography } from '@mui/material'
import React from 'react'
import ChatList from '../ChatList/ChatList'

export default function Chat() {
    return (
        <>
            <Container sx={{mt:6}}>
                <Typography variant='h4' sx={{fontFamily: 'Roboto'}}>
                    Chats
                </Typography>
                <ChatList/>
            </Container>
        </>
    )
}
