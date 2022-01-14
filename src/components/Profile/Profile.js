import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';

export default function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Profile</h1>
            <p>{user.name}</p>
        </div>
    )
}
