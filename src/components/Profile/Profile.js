import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ProfileForm from '../ProfileForm/ProfileForm';
import TopBackground from '../TopBackground/TopBackground';

export default function Profile() {
    const {user} = useContext(UserContext);
    const theme = useContext(ThemeContext);
    
    return (
        <div>
        <TopBackground color={theme.purple}/>
        <Box style={{height: "321px",}}>
            <Box style={{ 
                justifyContent: "center", 
                display: "flex",
            }}>
                <Typography mt={4} variant="h5" gutterBottom component="div" style={{color: "white"}}>
                    Profile
                </Typography>
            </Box>
            <Box mt={1}
            style={{ 
                justifyContent: "center", 
                display: "flex", 
            }}>
            <Avatar
                alt="Remy Sharp"
                src={user.image}
                sx={{ width: 150, height: 150 }}
            />
            </Box>
            <Box style={{ 
                justifyContent: "center", 
                display: "flex",
            }}>
                <Typography mt={1} variant="h5" gutterBottom component="div" style={{color: "white"}}>
                    {user.name.split(" ")[0]}
                </Typography>
            </Box>
        </Box>
        <ProfileForm/>
        </div>
    )
}
