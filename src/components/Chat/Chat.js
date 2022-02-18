import { Container, Box, Typography, Avatar, IconButton, TextField, InputBase } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Message from '../Message/Message';
import { useSocket } from '../../Contexts/SocketProvider';
import { useConversations } from '../../Contexts/ConversationsContext';
import { usePotentialMatches } from '../../Contexts/PotentialMatchesProvider'


export default function Chat(props) {
    const { user } = React.useContext(UserContext)
    const { setPage } = React.useContext(PageContext)
    const [message, setMessage] = React.useState('')
    const scrollRef = useRef(null)
    const socket = useSocket();
    const { chatWith, setChatWith, conversations ,setConversations } = useConversations();
    const { setPotetialMatches } = usePotentialMatches();


    const onKeyDown = (event) => {
        if (event.key === 'Enter' || event.code === "NumpadEnter") {
            handleSubmit(event);
        }
    }
    useEffect(() => {
        console.log("scroll")
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [conversations]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            message: message,
            sender: user.id,
            receiver: conversations[chatWith].otherUser._id,
            date: new Date()
        }
        if(newMessage.message.length > 0) {
            const tempConversations = [...conversations];
            tempConversations[chatWith].messages.push(newMessage);
            setConversations(tempConversations);
            socket.emit("send-message", { room: conversations[chatWith].id, message: newMessage });
        }
        setMessage('');
    }

    const handleBack = () => {
        setPotetialMatches(prev => prev.map(match => {
            if (match.id === conversations[chatWith].id) {
                return { ...match, messages: conversations[chatWith].messages }
            }
            return match;
        }));
        setPage("matches");
        setChatWith(null);
    }


    const showMessages = () => {

        return (
            conversations[chatWith].messages.length ?
            conversations[chatWith].messages.map((m, index) => {
                return (
                    <Message key={index} message={m.message} right={m.sender == user.id} />
                )
            }
            ) :
            <p style={{
                color: "gray",
                marginTop: "60px",
                width: "100%",
                textAlign: "center"
            }}>No messages yet.</p>
        )
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
            }}>
                <IconButton onClick={handleBack}>
                    <ArrowBackIcon sx={{ color: "black" }} />
                </IconButton>
                <Avatar
                    alt="Remy Sharp"
                    src={conversations[chatWith].otherUser.image}
                    sx={{ width: 35, height: 35, ml: 2 }}
                />
                <Typography variant='h6' sx={{ fontFamily: 'Roboto', ml: 1 }}>
                    {conversations[chatWith].otherUser.name}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                mt: 1,
                flexDirection: "column",
                height: "79vh",
                overflow: "auto",

            }}>

                {showMessages()}
                <div ref={scrollRef} />
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
            }}>
                <InputBase
                    sx={{ ml: 1, flex: 1, background: "#F1F1F1", borderRadius: "50px", padding: "10px" }}
                    placeholder="Type Something..."
                    value={message}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                />
                <IconButton onClick={handleSubmit}>
                    <SendIcon sx={{ color: "#111111", fontSize: 30 }} />
                </IconButton>
            </Box>
        </Container>
    )
}
