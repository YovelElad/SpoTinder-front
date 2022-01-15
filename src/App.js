import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import {PageContext} from './Contexts/PageContext';
import { UserContext } from './Contexts/UserContext';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';

const ofir = {_id:{$oid:"61c5aa15ab0230614f09a5a4"},email:"ofir@email.com",password:"1234",topArtists:["Aviv Geffen","Arik Einstein","Shlomo Artzi","Keren Peles","Static & Ben El","Taylor Swift","Adele","Idan Raichel","Noa Kirel","The Beatles","Queen","Lady Gaga","Omer Adam","Sarit Hadad","Harel Skaat","Mergui","Ed Sheeran","Justin Bieber","Arutz Hakibud","Ivri Lider"],topTracks:["אפס מאמץ","Bezos I","אנג'ל","רסיסים","Fancy Like","Juice","רגע - הופעה חיה באמפי שוני","Drunken Sailor","Love Boy","Love Is In The Air","Love On Top","We Are Never Ever Getting Back Together","Bad Romance","לשם","כמה עוד אפשר","Overwhelmed (Ryan Mack Remix)","Watermelon Sugar","Rocket Man (I Think It's Going To Be A Long, Long Time)","אהבה קטנה","הפינאלי","Go the Distance","Two Princes","שלום לך ארץ נהדרת","מאסטר טל","December, 1963 (Oh What a Night!)","עולה עולה","שביל הבריחה","רצה הביתה","שיר הפריחה","איש הברק","בחום של תל אביב","Price Tag","טמפרטורה","קשה לי לא להתרגש","Rolling in the Deep","זה הרגע לאהוב","יהלום - Prod. By Triangle","Drum","Arabian Nights","לך תתרגל איתה","פיז'ו 92","תן לי","Shiny","ואיך שלא","מסיבה","אמא","Take A Bow","כמו סינדרלה","גם אני","עולם משוגע"],gender:"male",interestedIn:["male","female"],"__v":{"$numberInt":"0"},"country":"IL","id":"61c5aa15ab0230614f09a5a4",image:"https://i.scdn.co/image/ab6775700000ee85106f6ba0ca11f991af308b1c",name:"Ofir Duchovne"};
const renderSwitch = (page) => {
  switch(page) {
    case 'home':
      return <Home/>;
    case 'matches':
      return <h1>Matches</h1>;
    case 'profile':
      return <Profile/>;
    default:
      return <h1>Home</h1>;
  }
}

function App() {
  const [page, setPage] = React.useState('home');
  const [user, setUser] = React.useState(ofir);
  const updateUser = (user) => {
    setUser(user);
  }
  return (
    <div>

        <PageContext.Provider value={{page,setPage}}>
          <NavBar/>
        </PageContext.Provider>
        <UserContext.Provider value={{user,updateUser}}>
          <Box>
            {renderSwitch(page)}
            <Box sx={{height: "10vh"}}/>
          </Box>
        </UserContext.Provider>
    </div>
  );
}

export default App;
 