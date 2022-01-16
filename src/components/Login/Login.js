import React from 'react';
import Input from "./Input";
import { Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../../Contexts/UserContext';



export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {updateUser} = React.useContext(UserContext);

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
        axios.post('http://localhost:8888/login', {
            email: email,
            password: password
        }).then(res => {
            if(res.data.status) {
                console.log(res.data.data);
                updateUser(res.data.data);
            } else {
                console.log(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className='login'>
            <div className='wrapper'>
                <h1>
                    Login
                </h1>
                <form action="#">
                    <Input onChange={handleChange} name="email" value={email} type="email">Email Address</Input>
                    <br />
                    <Input onChange={handleChange} name="password" value={password} type="password">Password</Input>
                    <br />
                    <br />
                    <Button onClick={handleSubmit} variant="contained">Login</Button>
                </form>
            </div>
        </div>
    )
}
 