import React, { createContext, useContext, useEffect } from "react";
import { UserContext } from '../Contexts/UserContext'
import axios from 'axios';
import { ContactSupport } from "@mui/icons-material";
import { PageContext } from "./PageContext";
import userService from "../services/user.service";


export const PotentialMatchesContext = createContext(null);

export function usePotentialMatches() {
    return useContext(PotentialMatchesContext)
}



export function PotentialMatchesProvider({ children }) {
    const { user } = useContext(UserContext);
    const [potentialMatches, setPotetialMatches] = React.useState([]);
    const [selectedMatch, setSelectedMatch] = React.useState({});
    const {setPage} = React.useContext(PageContext);



    useEffect(() => {
        fetchPotentialMatchessData();
    }, []);

    useEffect(() => {
        if(selectedMatch && selectedMatch.thisUserLiked && selectedMatch.otherUserLiked && user.role === "PAID") {
            setPage('its-a-match')
        }
    }, [selectedMatch]);


    const updateMatch = async function(userID, matchID, updateData) {
        const match = potentialMatches.find(m => m.id == matchID);
        if(match) {
            const response = await userService.updateMatch(userID, matchID, updateData);
            if(response.data.status) {
                const updatedMatch = {...match, thisUserLiked: !match.thisUserLiked};                
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
        let potentialMatchesResponse;
        try {
            potentialMatchesResponse = await userService.getPotentialMatches(user.id);
            if (potentialMatchesResponse.data.status) {
                const temp = await Promise.all(potentialMatchesResponse.data.data.map(async item => {
                    const otherUserID = user._id == item.firstUser ? item.secondUser : item.firstUser;
                    let otherPersonData;
                    try {
                        const otherUserResponse = await userService.getUser(otherUserID);
                        if (otherUserResponse.data.status) {
                            otherPersonData = otherUserResponse.data;
                            otherPersonData = otherPersonData.data;
                        }

                    } catch {
                        /////////////////////////////////////////////////////
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
                        whoAmI: user._id == item.firstUser ? "first" : "second",
                        messages: item.messages
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
        <PotentialMatchesContext.Provider value={{ potentialMatches, setPotetialMatches, updateMatch, selectedMatch, setSelectedMatch }}>
            {children}
        </PotentialMatchesContext.Provider>
    )
}