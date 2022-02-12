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
    // const [messages, setMessages] = React.useState([{me:false, msg:'Hello'},{me:true, msg:'Hi'},{me:false, msg:'How are you?'},{me:true, msg:'I am fine'},{me:false,msg:"What's up?"}]);
    const scrollRef = useRef(null)
    const socket = useSocket();
    const { chatWith, setChatWith } = useConversations();
    const [messages, setMessages] = React.useState(chatWith.messages);
    const { setPotetialMatches } = usePotentialMatches();


    const onKeyDown = (event) => {
        if (event.key === 'Enter' || event.code === "NumpadEnter") {
            handleSubmit(event);
        }
    }
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [messages]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            message: message,
            sender: user.id,
            receiver: chatWith.otherUser._id,
            date: new Date()
        }

        setMessages([...messages, newMessage]);

        socket.emit("send-message", { room: chatWith.id, message: newMessage });

        setMessage('');
    }

    const handleBack = () => {
        setPotetialMatches(prev => prev.map(match => {
            if (match.id === chatWith.id) {
                return { ...match, messages: messages }
            }
            return match;
        }));
        setPage("matches");
        setChatWith(null);
    }

    useEffect(() => {
        socket.on("receive-message", (data) => {
            console.log(data);
            // const newMsg = {msg: data.data.message, me: false}
            setMessages((prev) => [...prev, data]);

            return () => socket.off('receive-message');
        });
    }, []);

    const showMessages = () => {

        return (
            messages.length ?
            messages.map((m, index) => {
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
                    src={chatWith.otherUser.image}
                    sx={{ width: 35, height: 35, ml: 2 }}
                />
                <Typography variant='h6' sx={{ fontFamily: 'Roboto', ml: 1 }}>
                    {chatWith.otherUser.name}
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
