import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import {PageContext} from './Contexts/PageContext';
import { UserContext } from './Contexts/UserContext';
import { ThemeContext } from './Contexts/ThemeContext';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import ItsAMatch from './components/ItsAMatch/ItsAMatch';
import Matches from './components/Matches/Matches';
import Chat from './components/Chat/Chat';


const ofir = {_id:{$oid:"61c5aa15ab0230614f09a5a4"},email:"ofir@email.com",password:"1234",topArtists:["Aviv Geffen","Arik Einstein","Shlomo Artzi","Keren Peles","Static & Ben El","Taylor Swift","Adele","Idan Raichel","Noa Kirel","The Beatles","Queen","Lady Gaga","Omer Adam","Sarit Hadad","Harel Skaat","Mergui","Ed Sheeran","Justin Bieber","Arutz Hakibud","Ivri Lider"],topTracks:["אפס מאמץ","Bezos I","אנג'ל","רסיסים","Fancy Like","Juice","רגע - הופעה חיה באמפי שוני","Drunken Sailor","Love Boy","Love Is In The Air","Love On Top","We Are Never Ever Getting Back Together","Bad Romance","לשם","כמה עוד אפשר","Overwhelmed (Ryan Mack Remix)","Watermelon Sugar","Rocket Man (I Think It's Going To Be A Long, Long Time)","אהבה קטנה","הפינאלי","Go the Distance","Two Princes","שלום לך ארץ נהדרת","מאסטר טל","December, 1963 (Oh What a Night!)","עולה עולה","שביל הבריחה","רצה הביתה","שיר הפריחה","איש הברק","בחום של תל אביב","Price Tag","טמפרטורה","קשה לי לא להתרגש","Rolling in the Deep","זה הרגע לאהוב","יהלום - Prod. By Triangle","Drum","Arabian Nights","לך תתרגל איתה","פיז'ו 92","תן לי","Shiny","ואיך שלא","מסיבה","אמא","Take A Bow","כמו סינדרלה","גם אני","עולם משוגע"],gender:"male",interestedIn:["male","female"],"__v":{"$numberInt":"0"},"country":"IL","id":"61c5aa15ab0230614f09a5a4",image:"https://i.scdn.co/image/ab6775700000ee85106f6ba0ca11f991af308b1c",name:"Ofir Duchovne"};
const renderSwitch = (page) => {
  switch(page) {
    case 'home':
      return <><NavBar/><Home/></>;
    case 'matches':
      return <><NavBar/><Matches/></>;
    case 'profile':
      return <><NavBar/><Profile/></>;
    case 'chat':
      return <Chat/>;
    case 'its-a-match':
      return <ItsAMatch/>;
    default:
      return <h1>Home</h1>;
  }
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
  const [page, setPage] = React.useState('home');
  const [user, setUser] = React.useState(ofir);
  const updateUser = (user) => {
    setUser(user);
  }
  return (
    <div>
        <ThemeContext.Provider value={theme}>
        <PageContext.Provider value={{page,setPage}}>
        <UserContext.Provider value={{user,updateUser}}>
          {/* <NavBar/> */}
          <Box>
            {renderSwitch(page)}
            <Box sx={{height: "10vh"}}/>
          </Box>
        </UserContext.Provider>
        </PageContext.Provider>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
 