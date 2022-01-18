import React, { createContext, useContext, useEffect } from "react";
import { UserContext } from '../Contexts/UserContext'
import axios from 'axios';

export const PotentialMatchesContext = createContext(null);

export function usePotentialMatches() {
    return useContext(PotentialMatchesContext)
}



export function PotentialMatchesProvider({ children }) {
    const { user } = useContext(UserContext);
    const [potentialMatches, setPotetialMatches] = React.useState([]);

    useEffect(() => {
        fetchPotentialMatchessData();
    }, []);

    const updateMatch = async function(userID, matchID, updateData) {
        const updateCall = "https://spotinder-shenkar.herokuapp.com/users/" + userID + "/matches/" + matchID;
        const match = potentialMatches.find(m => m.id == matchID);
        if(match) {
            const response = await axios.put(updateCall,updateData);
            if(response.data.status) {
                const updatedMatch = {...match, ...updateData};
                const updatedPotentialMatches = potentialMatches.map(m => m.id == matchID ? updatedMatch : m);
                setPotetialMatches(updatedPotentialMatches);
            } else {
                console.log(response);
            }
        } else {
            console.log("match not found");
        }
        
    }

    const fetchPotentialMatchessData = async () => {
        let potentialMatchessData = [];
        let potentialMatchesResponse;
        try {
            potentialMatchesResponse = await fetch("https://spotinder-shenkar.herokuapp.com/users/61e41635e66be9fb78ea343a/matches");
            if (potentialMatchesResponse.ok) {
                potentialMatchessData = await potentialMatchesResponse.json();
                const temp = await Promise.all(potentialMatchessData.data.map(async item => {
                    const otherUserID = user._id == item.firstUser ? item.secondUser : item.firstUser;
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
                        id: item._id,
                        thisUserLiked: otherUserID == item.firstUser ? item.secondUserLiked : item.firstUserLiked,
                        otherUserLiked: otherUserID != item.firstUser ? item.secondUserLiked : item.firstUserLiked,
                        thisUserIs:  otherUserID == item.firstUser ? "second" : "first",
                        mutualArtists: item.mutualArtists,
                        mutualTracks: item.mutualTracks,
                        score: item.score,
                        otherUser: otherPersonData,
                        whoAmI: user._id == item.firstUser ? "first" : "second"
                    }
                }
                )
                )
                setPotetialMatches(temp);

            } else {
                console.log("Error while fetching data from server");
            }
        } catch (err) {
            console.log(`Error while fetching data from server: ${err}`);
        }

    }

    return (
        <PotentialMatchesContext.Provider value={{ potentialMatches, setPotetialMatches, updateMatch }}>
            {children}
        </PotentialMatchesContext.Provider>
    )
}