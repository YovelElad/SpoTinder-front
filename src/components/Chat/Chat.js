import { Container, Box, Typography, Avatar, IconButton, TextField, InputBase } from '@mui/material'
import React, {useEffect} from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Message from '../Message/Message';


export default function Chat(props) {
    const {user} = React.useContext(UserContext)
    const {setPage} = React.useContext(PageContext)
    const [message, setMessage] = React.useState('')
    const [messages, setMessages] = React.useState([{me:false, msg:'Hello'},{me:true, msg:'Hi'},{me:false, msg:'How are you?'},{me:true, msg:'I am fine'},{me:false,msg:"What's up?"}]);

    const onKeyDown = (event) => {
        if (event.key === 'Enter' || event.code === "NumpadEnter") {
          handleSubmit(event);
        }
      }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, {msg:message, me: true}])
        setMessage('')
    }


    return (
        <Container sx={{mt:4}}>
            <Box sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
            }}>
                <IconButton onClick={()=>setPage("matches")}>
                    <ArrowBackIcon sx={{color: "black"}}/>
                </IconButton>
                <Avatar
                    alt="Remy Sharp"
                    src={user.image}
                    sx={{ width: 35, height: 35, ml: 2 }}
                />
                <Typography variant='h6' sx={{fontFamily: 'Roboto', ml:1}}>
                    {user.name}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                height: "80vh",
                // background: "red",
            }}>
            {messages.map((m, index) => {
                return (
                    <Message key={index} message={m.msg} right={m.me}/>
                )
            }
            )}
                {/* <Message message="minim veniam, quis nostrud exercitation ullamco"/>
                <Message right message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
                <Message message="messages list goes here"/> */}
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
            }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 , background: "#F1F1F1", borderRadius: "50px", padding: "10px"}}
                    placeholder="Type Something..."
                    value={message}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                />
                <IconButton onClick={handleSubmit}>
                    <SendIcon sx={{color: "#111111", fontSize: 30}}/>
                </IconButton>
            </Box>
        </Container>
    )
}