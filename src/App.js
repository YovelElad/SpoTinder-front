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
import { PotentialMatchesContext } from './Contexts/PotentialMatchesContext';

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
      return <h1>Home</h1>;
  }
}

const ofir = { _id: { $oid: "61c5aa15ab0230614f09a5a4" }, email: "ofir@email.com", password: "1234", topArtists: ["Aviv Geffen", "Arik Einstein", "Shlomo Artzi", "Keren Peles", "Static & Ben El", "Taylor Swift", "Adele", "Idan Raichel", "Noa Kirel", "The Beatles", "Queen", "Lady Gaga", "Omer Adam", "Sarit Hadad", "Harel Skaat", "Mergui", "Ed Sheeran", "Justin Bieber", "Arutz Hakibud", "Ivri Lider"], topTracks: ["אפס מאמץ", "Bezos I", "אנג'ל", "רסיסים", "Fancy Like", "Juice", "רגע - הופעה חיה באמפי שוני", "Drunken Sailor", "Love Boy", "Love Is In The Air", "Love On Top", "We Are Never Ever Getting Back Together", "Bad Romance", "לשם", "כמה עוד אפשר", "Overwhelmed (Ryan Mack Remix)", "Watermelon Sugar", "Rocket Man (I Think It's Going To Be A Long, Long Time)", "אהבה קטנה", "הפינאלי", "Go the Distance", "Two Princes", "שלום לך ארץ נהדרת", "מאסטר טל", "December, 1963 (Oh What a Night!)", "עולה עולה", "שביל הבריחה", "רצה הביתה", "שיר הפריחה", "איש הברק", "בחום של תל אביב", "Price Tag", "טמפרטורה", "קשה לי לא להתרגש", "Rolling in the Deep", "זה הרגע לאהוב", "יהלום - Prod. By Triangle", "Drum", "Arabian Nights", "לך תתרגל איתה", "פיז'ו 92", "תן לי", "Shiny", "ואיך שלא", "מסיבה", "אמא", "Take A Bow", "כמו סינדרלה", "גם אני", "עולם משוגע"], gender: "male", interestedIn: ["male", "female"], "__v": { "$numberInt": "0" }, "country": "IL", "id": "61c5aa15ab0230614f09a5a4", image: "https://i.scdn.co/image/ab6775700000ee85106f6ba0ca11f991af308b1c", name: "Ofir Duchovne" };
// const ofir = { _id: { $oid: "61c5aa15ab0230614f09a5a4" }, email: "ofir@email.com", password: "1234", topArtists: ["Aviv Geffen", "Arik Einstein", "Shlomo Artzi", "Keren Peles", "Static & Ben El", "Taylor Swift", "Adele", "Idan Raichel", "Noa Kirel", "The Beatles", "Queen", "Lady Gaga", "Omer Adam", "Sarit Hadad", "Harel Skaat", "Mergui", "Ed Sheeran", "Justin Bieber", "Arutz Hakibud", "Ivri Lider"], topTracks: ["אפס מאמץ", "Bezos I", "אנג'ל", "רסיסים", "Fancy Like", "Juice", "רגע - הופעה חיה באמפי שוני", "Drunken Sailor", "Love Boy", "Love Is In The Air", "Love On Top", "We Are Never Ever Getting Back Together", "Bad Romance", "לשם", "כמה עוד אפשר", "Overwhelmed (Ryan Mack Remix)", "Watermelon Sugar", "Rocket Man (I Think It's Going To Be A Long, Long Time)", "אהבה קטנה", "הפינאלי", "Go the Distance", "Two Princes", "שלום לך ארץ נהדרת", "מאסטר טל", "December, 1963 (Oh What a Night!)", "עולה עולה", "שביל הבריחה", "רצה הביתה", "שיר הפריחה", "איש הברק", "בחום של תל אביב", "Price Tag", "טמפרטורה", "קשה לי לא להתרגש", "Rolling in the Deep", "זה הרגע לאהוב", "יהלום - Prod. By Triangle", "Drum", "Arabian Nights", "לך תתרגל איתה", "פיז'ו 92", "תן לי", "Shiny", "ואיך שלא", "מסיבה", "אמא", "Take A Bow", "כמו סינדרלה", "גם אני", "עולם משוגע"], gender: "male", interestedIn: ["male", "female"], "__v": { "$numberInt": "0" }, "country": "IL", "id": "61c5aa15ab0230614f09a5a4", image: "https://i.scdn.co/image/ab6775700000ee85106f6ba0ca11f991af308b1c", name: "Ofir Duchovne" };
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
  const [page, setPage] = React.useState('home');
  const [user, setUser] = React.useState(Yovel);
  const [potentialMatches, setPotetialMatches] = React.useState([]);
  console.log(typeof (potentialMatches));
  const [users, setUsers] = React.useState([]);



  const updateUser = (user) => {
    setUser(user);
  }

  // console.log(potentialMatches);
  // console.log(users);


  useEffect(() => {
    // fetchUsers()
    fetchPotentialMatchessData();
  }, []);

  const fetchUsers = async () => {
    let usersData = [];
    let usersResponse;
    try {
      usersResponse = await fetch("https://spotinder-shenkar.herokuapp.com/users/");
      if (usersResponse.ok) {

        usersData = await usersResponse.json();
        usersData.data.map(item => addUser(item.name));

      } else {
        console.log("Error while fetching data from server");
      }
    } catch (err) {
      console.log(`Error while fetching data from server: ${err}`);
    }
  }


  const fetchPotentialMatchessData = async () => {
    let potentialMatchessData = [];
    let potentialMatchesResponse;
    try {
      potentialMatchesResponse = await fetch("https://spotinder-shenkar.herokuapp.com/users/61e41635e66be9fb78ea343a/matches");
      if (potentialMatchesResponse.ok) {
        potentialMatchessData = await potentialMatchesResponse.json();
        const temp = await Promise.all( potentialMatchessData.data.map(async item => {
          const otherUserID = user._id== item.firstUser ? item.secondUser : item.firstUser;
          let otherPersonData;
          try {
            
            const otherUserResponse = await fetch(`https://spotinder-shenkar.herokuapp.com/users/${otherUserID}`);
            if (otherUserResponse.ok) {
              otherPersonData = await otherUserResponse.json();
              otherPersonData = otherPersonData.data;
              
            }

          } catch {
            
          }
          return {
            thisUserLiked: otherUserID == item.firstUser ? item.secondUserLiked : item.firstUserLiked,
            otherUserLiked: otherUserID != item.firstUser ? item.secondUserLiked : item.firstUserLiked,
            mutualArtists: item.mutualArtists,
            mutualTracks: item.mutualTracks,
            score: item.score,
            otherUser: otherPersonData
          }
        }
        )
        )
        console.log(temp);
        setPotetialMatches(temp);
        
      } else {
        console.log("Error while fetching data from server");
      }
    } catch (err) {
      console.log(`Error while fetching data from server: ${err}`);
    }

  }

  function add(_id, _firstUser, _secondUser, _nutualTracks, _mutualArtists, _firstUserLiked, _secondUserLiked, _score) {
    const newPotentialMatch = {
      _id: _id,
      firstUser: _firstUser,
      secondUser: _secondUser,
      mnutualTracks: _nutualTracks,
      mutualArtists: _mutualArtists,
      firstUserLiked: _firstUserLiked,
      secondUserLiked: _secondUserLiked,
      score: _score
    }
    setPotetialMatches([...potentialMatches, newPotentialMatch]);
  }

  function addUser(name) {
    setUsers(...users, name);
  }


  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <PageContext.Provider value={{ page, setPage }}>
          <NavBar />
          <UserContext.Provider value={{ user, updateUser }}>
            <PotentialMatchesContext.Provider value={{ potentialMatches, setPotetialMatches }}>
              <Box>
                {renderSwitch(page)}
                <Box sx={{ height: "10vh" }} />
              </Box>
            </PotentialMatchesContext.Provider>
          </UserContext.Provider>
        </PageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
