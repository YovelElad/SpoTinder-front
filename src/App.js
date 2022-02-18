import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import { PageContext } from './Contexts/PageContext';
import { UserContext } from './Contexts/UserContext';
import { ThemeContext } from './Contexts/ThemeContext';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import ItsAMatch from './components/ItsAMatch/ItsAMatch';
import Login from './components/Login/Login';
import SpotifyLogin from './components/Login/SpotifyLogin';
import SignUp from './components/Login/SignUp';
import Matches from './components/Matches/Matches';
import Chat from './components/Chat/Chat';
import { PotentialMatchesProvider } from './Contexts/PotentialMatchesProvider';
import { SocketProvider } from './Contexts/SocketProvider';
import { ConversationsProvider } from './Contexts/ConversationsContext';
import authService from './services/auth.service';
import userService from './services/user.service';


const renderSwitch = (page) => {
  switch (page) {
    case 'home':
      return <><NavBar /><Home /><Box sx={{ height: "10vh" }} /></>;
    case "signup":
      return <SignUp />;
    case 'spotify-login':
      return <SpotifyLogin />
    case "login":
      return <Login />
    case 'matches':
      return <><NavBar /><Matches /><Box sx={{ height: "10vh" }} /></>;
    case 'profile':
      return <><NavBar /><Profile /><Box sx={{ height: "10vh" }} /></>;
    case 'chat':
      return <Chat />;
    case 'its-a-match':
      return <ItsAMatch />;
    default:
      return <><NavBar /><Home /><Box sx={{ height: "10vh" }} /></>;
  }
}

const loggedOutRenderSwitch = (page) => {
  switch (page) {
    case "signup":
      return <SignUp />
    case 'spotify-login':
      return <SpotifyLogin />
    default:
      return <Login />

  }
}
const theme = {
  purple: '#b14fed',
  blue: '#3f51b5',
  pink: '#f50057',
  red: "#FF2D2D",
  darkPurple: '#7c22b3',
  palePurple: '#BB34D2',
  palePink: '#E12CC2'

};

function App() {
  const userFromStorage = authService.getCurrentUser();
  const [page, setPage] = React.useState('home');
  const [user, setUser] = React.useState((userFromStorage && userFromStorage.user.token) ? { ...userFromStorage.user, role: userFromStorage.role } : null);

  const updateUser = (user) => {
    setUser(user);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        {
          user ?
            <SocketProvider id={user._id}>
                <ThemeContext.Provider value={theme}>
                  <PageContext.Provider value={{ page, setPage }}>
                    <PotentialMatchesProvider>
                      <ConversationsProvider>
                              {/* <NavBar/> */}
                              <Box>
                                {renderSwitch(page)}
                              </Box>
                      </ConversationsProvider>
                    </PotentialMatchesProvider>
                  </PageContext.Provider>
                </ThemeContext.Provider>
            </SocketProvider>
            :
            <ThemeContext.Provider value={theme}>
              <PageContext.Provider value={{ page, setPage }}>
                {loggedOutRenderSwitch(page)}
              </PageContext.Provider>
            </ThemeContext.Provider>

        }
      </UserContext.Provider>
    </div>
  );
}

export default App;
