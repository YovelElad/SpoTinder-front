import React, { createContext, useContext, useEffect } from "react";
import { UserContext } from '../Contexts/UserContext'


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
                        otherUser: otherPersonData
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
        <PotentialMatchesContext.Provider value={{ potentialMatches, setPotetialMatches }}>
            {children}
        </PotentialMatchesContext.Provider>
    )
}