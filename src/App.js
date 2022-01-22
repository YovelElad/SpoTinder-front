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
const Yovel = {
  _id: "61e41635e66be9fb78ea343a",
  email: "yovell@gmail.com",
  password: "1234",
  topArtists: [
    "Slipknot",
    "Metallica",
    "Lamb of God",
    "TOOL",
    "Pantera",
    "Queen",
    "Avenged Sevenfold",
    "System Of A Down",
    "Korn",
    "Pink Floyd",
    "Megadeth",
    "Motörhead",
    "LONI",
    "Killswitch Engage",
    "Bury Tomorrow",
    "Boris Brejcha",
    "Disturbed",
    "Trivium",
    "Rammstein",
    "Bullet For My Valentine"
  ],
  topTracks: [
    "The Pot",
    "Toxicity",
    "Nero Forte",
    "Vicarious",
    "...And Justice For All",
    "All Out Life",
    "Jambi",
    "Small Talk - 2014 Edit",
    "Duality",
    "10,000 Days (Wings Pt 2)",
    "One",
    "Silvera",
    "Living On The 110",
    "Birth Of The Cruel",
    "Pulse of the Maggots",
    "Wings For Marie (Pt 1)",
    "The Shortest Straw",
    "Devil's Dance - Live",
    "Stranded",
    "The Call Of Ktulu - Live",
    "Rosetta Stoned",
    "Lost Keys (Blame Hofman)",
    "War Eternal",
    "Vermilion",
    "Harvester Of Sorrow",
    "Damage, Inc. - Remastered",
    "Dyers Eve",
    "That Was Just Your Life",
    "The House That Jack Built",
    "Intension",
    "Justice Medley - Live In Mexico City",
    "The Ecstasy Of Gold - Live",
    "The Memory Remains - Live",
    "The Thing That Should Not Be - Live",
    "Symphony Of Destruction",
    "What's Next",
    "Hail to the King",
    "Battery",
    "Fuel - Live",
    "Lipan Conjuring",
    "Right In Two",
    "Welcome Home (Sanitarium) - Remastered",
    "No Leaf Clover - Live",
    "Adrenaline",
    "Master Of Puppets - Live",
    "The Counteroffensive",
    "The Unforgiven III",
    "Viginti Tres",
    "Cyanide",
    "Death Because of Death"
  ],
  gender: "male",
  interestedIn: [
    "male",
    "female"
  ],
  image: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2222213897789978&height=300&width=300&ext=1644929700&hash=AeTVh1FuTYc3fqt1APY",
  name: "Yovel Elad",
  refreshToken: "AQAmcWTLAO0qh6K4XrRXlZ3o-x2H-0969YpyOjnXiolfrvPCPU5uW75ZZezc8fcoRpB3DNa1TU9wmVxa1i__7l4kJfFj9UZCiKwShr_YgXp_bqkMeWmKVFr1r6bRagRc7b8",
  token: "BQDKOb8Vae6j8vcS6lTnIHABfTJczxKPnc9JLg9t_wBrut9bZ6tHj_FvGmfVsClcKQ9nTnFkDQkwuiwgDAZNZ6d8uKDiKBw9UPWUoz1Ef-oofbVB_6hcrXtpWuekDZdNBxJMTi1LA9VdMfrx4R7PoNq9aYHhJT3BHgxk1Bt-rJuTMOh939zUdxHhjeI"
}
// #b14fed
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
  const [user, setUser] = React.useState(userFromStorage ? {...userFromStorage.user, role: userFromStorage.role} : null);

  const updateUser = (user) => {
    setUser(user);
  }

  console.log(user);

  const fetchUser = async () => {
    let userData;
    let userResponse;
    try {
      userResponse = await fetch("https://spotinder-shenkar.herokuapp.com/users/61e41635e66be9fb78ea343a");
      if (userResponse.ok) {
        userData = await userResponse.json();
        userData = userData.data;
        setUser(userData);
      }
    } catch {

    }

  }
  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        {
          user ?
            <SocketProvider id={user._id.$oid}>
              <ConversationsProvider>
                <ThemeContext.Provider value={theme}>
                  <PageContext.Provider value={{ page, setPage }}>
                    <PotentialMatchesProvider>
                      {/* <NavBar/> */}
                      <Box>
                        {renderSwitch(page)}
                      </Box>
                    </PotentialMatchesProvider>
                  </PageContext.Provider>
                </ThemeContext.Provider>
              </ConversationsProvider>
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
